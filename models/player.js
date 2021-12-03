const mongoose = require('mongoose');

require('./position');
const playerSchema = require('./playerSchema');

module.exports = mongoose.model('Player', playerSchema);