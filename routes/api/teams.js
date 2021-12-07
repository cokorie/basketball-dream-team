const express = require('express');
const router = express.Router();
const teamsCtrl = require('../../controllers/api/teams');

// GET /api/teams
router.get('/', teamsCtrl.getUserTeam);
// GET /api/teams/players/:id
router.post('/players/:id', teamsCtrl.addToTeam);

module.exports = router;