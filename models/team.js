const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = require('./playerSchema');


const teamSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    players: [playerSchema]
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

teamSchema.statics.getTeam = function(userId) {
    return this.findOneAndUpdate(
        {user: userId},
        {user: userId},
        {upsert: true, new: true}
    );
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