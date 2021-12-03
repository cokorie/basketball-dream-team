const Schema = require('mongoose').Schema;

const playerSchema = new Schema({
    name: {type: String, required: true},
    ppg: {type: Number, required: true},
    rpg: {type: Number, required: true},
    ppg: {type: Number, required: true},
    rings: {type: Number, required: true},
    position: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = playerSchema;