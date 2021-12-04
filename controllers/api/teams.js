const Team = require('../../models/team');
const Player = require('../../models/player');

module.exports = {
    team
}

async function team(req, res) {
    const team = await Team.getTeam(req.user._id);
    res.json(team);
}

