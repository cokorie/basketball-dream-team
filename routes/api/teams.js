const express = require('express');
const router = express.Router();
const teamsCtrl = require('../../controllers/api/teams');

// GET /api/teams
router.get('/', teamsCtrl.getUserTeam);
// POST /api/teams/players/:id
router.post('/players/:id', teamsCtrl.addToTeam);

router.delete('/players/:id', teamsCtrl.deleteFromTeam);

router.put('/rename', teamsCtrl.rename);

module.exports = router;