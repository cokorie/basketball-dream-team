const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = require('./playerSchema');


const teamSchema = new Schema({
    user: { type: Schma.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', teamSchema);