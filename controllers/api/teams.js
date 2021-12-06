const Team = require('../../models/team');
const Player = require('../../models/player');

module.exports = {
    team,
    addToTeam,
    create
}

async function team(req, res) {
    const team = await Team.getTeam(req.user._id);
    res.json(team);
}

async function addToTeam(req, res) {
    const team = await Team.getTeam(req.user._id);
    await team.addPlayerToTeam(req.params.id);
    res.json(team);
}

async function create(req, res) {
    const team = await Team.getCart(req.user._id);
    await team.save();
    res.json(team);
}