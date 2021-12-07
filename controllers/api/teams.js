const Team = require('../../models/team');
// const Player = require('../../models/player');

module.exports = {
    getUserTeam,
    addToTeam
}

async function getUserTeam(req, res) {
    const team = await Team.getTeam(req.user._id);
    res.json(team);
}

async function addToTeam(req, res) {
    const team = await Team.getTeam(req.user._id);
    await team.addPlayerToTeam(req.params.id);
    res.json(team);
}

