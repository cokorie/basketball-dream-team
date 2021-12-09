const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = require('./playerSchema');


const teamSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    players: [playerSchema],
    name: { type: String }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

teamSchema.statics.getTeam = async function(userId) {
    let numTeams = await this.find({});
    numTeams = numTeams.length;
    let team = await this.findOne({user: userId});
    if(!team) {
      team = await this.create({
        user: userId, 
        name: `Team ${numTeams + 1}`
      });
    }
    return team;   
};

const maxPlayersByPosition = {
    Guard: 2,
    Forward: 2,
    Center: 1,
};

teamSchema.methods.addPlayerToTeam = async function(playerId) {
    const team = this;
    const playerToAdd = await mongoose.model('Player').findById(playerId);
    const numAtPosition = team.players.reduce((total, p) => p.position === playerToAdd.position ? total + 1 : total, 0);
    if(numAtPosition < maxPlayersByPosition[playerToAdd.position]) team.players.push(playerToAdd);
    return team.save();
}

module.exports = mongoose.model('Team', teamSchema);