require('dotenv').config();
require('./config/database');

const Position = require('./models/position');
const Player = require('./models/player');

(async function() {

  await Position.deleteMany({});
  const position = await Position.create([
    {name: 'Guard', sortOrder: 10},
    {name: 'Forward', sortOrder: 60},
    {name: 'Center', sortOrder: 110}
  ]);

  await Player.deleteMany({});
  const players = await Player.create([
    {name: 'Nate Archibald', ppg: 18.8, rpg: 2.3, apg: 7.4, rings: 1, position: position[0].name},
    {name: 'Kobe Bryant', ppg: 25.0, rpg: 5.2, apg: 4.7, rings: 5, position: position[0].name},
    {name: 'Bob Cousy', ppg: 18.4, rpg: 5.2, apg: 7.5, rings: 6, position: position[0].name},
    {name: 'Stephen Curry', ppg: 24.3, rpg: 4.6, apg: 6.5, rings: 3, position: position[0].name},
    {name: 'Clyde Drexler', ppg: 20.4, rpg: 6.1, apg: 5.6, rings: 1, position: position[0].name},
    {name: 'Walt Frazier', ppg: 18.9, rpg: 5.9, apg: 6.1, rings: 2, position: position[0].name},
    {name: 'Allen Iverson', ppg: 26.7, rpg: 3.7, apg: 6.2, rings: 0, position: position[0].name},
    {name: 'Magic Johnson', ppg: 19.5, rpg: 7.2, apg: 11.2, rings: 5, position: position[0].name},
    {name: 'Michael Jordan', ppg: 30.1, rpg: 6.2, apg: 5.3, rings: 6, position: position[0].name},
    {name: 'Jason Kidd', ppg: 12.6, rpg: 6.3, apg: 8.7, rings: 1, position: position[0].name},
    {name: 'Damian Lillard', ppg: 24.6, rpg: 4.2, apg: 6.7, rings: 0, position: position[0].name},
    {name: 'Pete Maravich', ppg: 24.2, rpg: 4.2, apg: 5.4, rings: 0, position: position[0].name},
    {name: 'Reggie Miller', ppg: 18.2, rpg: 3.0, apg: 3.0, rings: 0, position: position[0].name},
    {name: 'Steve Nash', ppg: 14.3, rpg: 3.0, apg: 8.5, rings: 0, position: position[0].name},
    {name: 'Chris Paul', ppg: 18.3, rpg: 4.5, apg: 9.4, rings: 0, position: position[0].name},
    {name: 'Gary Payton', ppg: 16.3, rpg: 3.9, apg: 6.7, rings: 1, position: position[0].name},
    {name: 'Oscar Robertson', ppg: 25.7, rpg: 7.5, apg: 9.5, rings: 1, position: position[0].name},
    {name: 'John Stockton', ppg: 13.1, rpg: 2.7, apg: 10.5, rings: 0, position: position[0].name},
    {name: 'Isiah Thomas', ppg: 19.2, rpg: 3.6, apg: 9.3, rings: 2, position: position[0].name},
    {name: 'Dwyane Wade', ppg: 22.0, rpg: 4.7, apg: 5.4, rings: 3, position: position[0].name},
    {name: 'Jerry West', ppg: 27.0, rpg: 5.8, apg: 6.7, rings: 1, position: position[0].name},
    {name: 'Russell Westbrook', ppg: 27.0, rpg: 5.8, apg: 6.7, rings: 0, position: position[0].name},
    {name: 'Lenny Wilkens', ppg: 16.5, rpg: 4.7, apg: 6.7, rings: 0, position: position[0].name},

    {name: 'Giannis Antetokounmpo', ppg: 21.1, rpg: 9.2, apg: 4.5, rings: 1, position: position[1].name},
    {name: 'Carmelo Anthony', ppg: 22.8, rpg: 6.3, apg: 2.8, rings: 0, position: position[1].name},
    {name: 'Ron Artest', ppg: 13.2, rpg: 4.5, apg: 2.7, rings: 1, position: position[1].name},
    {name: 'Charles Barkley', ppg: 22.1, rpg: 11.7, apg: 3.9, rings: 0, position: position[1].name},
    {name: 'Elgin Baylor', ppg: 27.4, rpg: 13.5, apg: 4.3, rings: 0, position: position[1].name},
    {name: 'Larry Bird', ppg: 24.3, rpg: 10.0, apg: 6.3, rings: 3, position: position[1].name},
    {name: 'Kevin Durant', ppg: 27.1, rpg: 7.1, apg: 4.2, rings: 2, position: position[1].name},
    {name: 'Alex English', ppg: 21.5, rpg: 5.5, apg: 3.6, rings: 0, position: position[1].name},
    {name: 'Julius Erving', ppg: 24.2, rpg: 8.5, apg: 4.2, rings: 1, position: position[1].name},
    {name: 'Kevin Garnett', ppg: 17.8, rpg: 10.0, apg: 3.7, rings: 1, position: position[1].name},
    {name: 'Paul George', ppg: 20.4, rpg: 6.4, apg: 3.5, rings: 0, position: position[1].name},
    {name: 'Elvin Hayes', ppg: 21.0, rpg: 12.5, apg: 1.8, rings: 1, position: position[1].name},
    {name: 'Grant Hill', ppg: 16.7, rpg: 6.0, apg: 4.1, rings: 0, position: position[1].name},
    {name: 'LeBron James', ppg: 27.0, rpg: 7.4, apg: 7.4, rings: 4, position: position[1].name},
    {name: 'Bernard King', ppg: 22.5, rpg: 5.8, apg: 3.3, rings: 0, position: position[1].name},
    {name: 'Kawhi Leonard', ppg: 19.2, rpg: 6.4, apg: 2.9, rings: 2, position: position[1].name},
    {name: 'Karl Malone', ppg: 25.0, rpg: 10.1, apg: 3.6, rings: 0, position: position[1].name},
    {name: 'Kevin McHale', ppg: 17.9, rpg: 7.3, apg: 1.7, rings: 3, position: position[1].name},
    {name: 'Dirk Nowitzki', ppg: 20.7, rpg: 7.5, apg: 2.4, rings: 1, position: position[1].name},
    {name: 'Bob Pettit', ppg: 26.4, rpg: 16.2, apg: 3.0, rings: 1, position: position[1].name},
    {name: 'Paul Pierce', ppg: 19.7, rpg: 5.6, apg: 3.5, rings: 1, position: position[1].name},
    {name: 'Scottie Pippen', ppg: 16.1, rpg: 6.4, apg: 5.2, rings: 6, position: position[1].name},
    {name: 'Dennis Rodman', ppg: 7.3, rpg: 13.1, apg: 1.8, rings: 5, position: position[1].name},
    {name: 'Dolph Schayes', ppg: 18.5, rpg: 12.1, apg: 3.1, rings: 1, position: position[1].name},
    {name: 'Dominique Wilkins', ppg: 24.8, rpg: 6.7, apg: 2.5, rings: 0, position: position[1].name},
    {name: 'Chris Webber', ppg: 20.7, rpg: 9.8, apg: 4.2, rings: 0, position: position[1].name},
    {name: 'James Worthy', ppg: 17.6, rpg: 5.1, apg: 3.0, rings: 3, position: position[1].name},
    
    {name: 'Kareem Abdul-Jabbar', ppg: 24.6, rpg: 11.2, apg: 3.6, rings: 6, position: position[2].name},
    {name: 'Bill Russell', ppg: 15.1, rpg: 22.5, apg: 4.3, rings: 11, position: position[2].name},
    {name: 'Wilt Chamberlain', ppg: 30.1, rpg: 22.9, apg: 4.4, rings: 2, position: position[2].name},
    {name: 'Anthony Davis', ppg: 23.9, rpg: 10.2, apg: 2.3, rings: 1, position: position[2].name},
    {name: 'Tim Duncan', ppg: 19.0, rpg: 10.8, apg: 3.0, rings: 5, position: position[2].name},
    {name: 'Joel Embiid', ppg: 24.7, rpg: 11.3, apg: 3.1, rings: 0, position: position[2].name},
    {name: 'Patrick Ewing', ppg: 21.0, rpg: 9.8, apg: 1.9, rings: 0, position: position[2].name},
    {name: 'Dwight Howard', ppg: 16.0, rpg: 12.0, apg: 1.4, rings: 1, position: position[2].name},
    {name: 'Moses Malone', ppg: 20.3, rpg: 12.3, apg: 1.3, rings: 1, position: position[2].name},
    {name: 'George Mikan', ppg: 23.1, rpg: 13.4, apg: 2.8, rings: 5, position: position[2].name},
    {name: 'Yao Ming', ppg: 19.0, rpg: 9.2, apg: 1.6, rings: 0, position: position[2].name},
    {name: 'Alonzo Mourning', ppg: 17.1, rpg: 8.5, apg: 1.1, rings: 1, position: position[2].name},
    {name: `Shaquille O'Neal`, ppg: 23.7, rpg: 10.9, apg: 2.5, rings: 4, position: position[2].name},
    {name: 'Hakeem Olajuwon', ppg: 21.8, rpg: 11.1, apg: 2.5, rings: 2, position: position[2].name},
    {name: 'Robert Parish', ppg: 14.5, rpg: 9.1, apg: 1.4, rings: 4, position: position[2].name},
    {name: 'David Robinson', ppg: 21.1, rpg: 10.6, apg: 2.5, rings: 2, position: position[2].name},
    {name: 'Ben Wallace', ppg: 5.7, rpg: 9.6, apg: 1.3, rings: 1, position: position[2].name},
    {name: 'Bill Walton', ppg: 13.3, rpg: 10.5, apg: 3.4, rings: 2, position: position[2].name},

  ]);

  console.log(players)

  process.exit();

})();