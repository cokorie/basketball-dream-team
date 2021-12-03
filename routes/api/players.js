const express = require('express');
const router = express.Router();
const playersCtrl = require('../../controllers/api/players');

router.get('/', playersCtrl.index);

module.exports = router;