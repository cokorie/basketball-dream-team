// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Player = require('./models/player');
const Position = require('./models/position');
// const Team = require('./models/team');

// Local variables will come in handy for holding retrieved documents
let user, player, position, team;
let users, players, positions, teams;
