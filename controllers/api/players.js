const Player = require('../../models/player');

module.exports = {
    index,
}

async function index(req, res) {
    const players = await Player.find({}).sort('name').populate('position').exec();
    res.json(players);
}

