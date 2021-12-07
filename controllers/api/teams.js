const Team = require('../../models/team');
const Player = require('../../models/player');

module.exports = {
    getUserTeam,
    addToTeam,
    deleteFromTeam,
    rename,
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

async function deleteFromTeam(req, res) {
    const team = await Team.getTeam(req.user._id);
    team.players.remove(req.params.id);
    await team.save();
    res.json(team);
}

async function rename(req, res) {
    const team = await Team.getTeam(req.user._id);
    team.name = req.body.teamName;
    await team.save();
    res.json(team);
}