const Player = require('../../models/player');

module.exports = {
    index,
    show
}

async function index(req, res) {
    const players = await Player.find({}).sort('name').populate('position').exec();
    console.log(players);
    res.json(players);
}

async function show(req, res) {
    const player = await Player.findById(req.params.id);
    res.json(player);
}