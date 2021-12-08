import React, { useEffect, useState, useRef } from 'react';
import "./CreateTeamPage.css";
import * as teamsAPI from '../../utilities/teams-api';
import { useNavigate } from 'react-router';
import CreateTeamPlayerName from '../../components/CreateTeamPlayerName/CreateTeamPlayerName';

export default function CreateTeamPage({ players }) {
  const [team, setTeam] = useState(null);
  const [player, setPlayer] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [teamTotal, setTeamTotal] = useState([]);

  const navigate = useNavigate();

  let guardDivs, forwardDivs, centerDivs, playerDivs;
  if (team) {
    const guards = players.filter(player => player.position === 'Guard' && !team.players.some(p => p._id === player._id));
    guardDivs = guards.map(guard =>
      <div>
        {guard.name}
        <br />
        <button onClick={() => handleAddPlayerToTeam(guard._id)}>ADD</button>
        <br />
        <br />
      </div>)
    const forwards = players.filter(player => player.position === 'Forward' && !team.players.some(p => p._id === player._id));
    forwardDivs = forwards.map(forward =>
      <div>
        {forward.name}
        <br />
        <button onClick={() => handleAddPlayerToTeam(forward._id)}>ADD</button>
        <br />
        <br />
      </div>)
    const centers = players.filter(player => player.position === 'Center' && !team.players.some(p => p._id === player._id));
    centerDivs = centers.map(center =>
      <div>
        {center.name}
        <br />
        <button onClick={() => handleAddPlayerToTeam(center._id)}>ADD</button>
        <br />
        <br />
      </div>)
  }


  useEffect(function () {
    async function getTeam() {
      const team = await teamsAPI.getTeam();
      setTeam(team);
    }
    getTeam();
  }, []);

  useEffect(function () {
    if (team) setTeamName(team.name);
  }, [team]);

  useEffect(function() {
    if(!team) return;
    let total = 0;
    console.log(team)
    team.players.forEach(function(player) {
      total += parseFloat(((player.ppg * 7) + (player.rpg * 4) + (player.apg * 5) + (player.rings * 10)).toFixed(1));
    });
    setTeamTotal(total);
  }, [team]);

  async function handleAddPlayerToTeam(playerId) {
    const updatedTeam = await teamsAPI.addPlayerToTeam(playerId);
    setTeam(updatedTeam);
  }

  async function handleDeletePlayerFromTeam(playerId) {
    console.log(playerId);
    const updatedTeam = await teamsAPI.deletePlayerFromTeam(playerId);
    setTeam(updatedTeam);
  }

  async function handleUpdateName() {
    const updatedTeam = await teamsAPI.rename(teamName);
    setTeam(updatedTeam);
  }

  if (!team) return null;
  playerDivs = team.players.map(player =>
    <div className="card">
      <u><strong>{player.name}</strong></u>
      <br />
      <strong>{player.position}</strong>
      <br /><br />
      PPG: {player.ppg}
      <br />
      RPG: {player.rpg}
      <br />
      APG: {player.apg}
      <br /><br />
      Championships: {player.rings}
      <br /><br />
      <strong>Total Points: {parseFloat((player.ppg * 7) + (player.rpg * 4) + (player.apg * 5) + (player.rings * 10)).toFixed(1)}</strong>
      <br />
      <button onClick={() => handleDeletePlayerFromTeam(player._id)} className="red">X</button>
    </div>)

  return (
    <>
      <h1>{teamName} Creation Page</h1>
      <br />
      <div>
        <input type="text" placeholder="Enter Team Name Here" value={teamName} onChange={(evt) => setTeamName(evt.target.value)} />
        <button onClick={handleUpdateName}>Update Team Name</button>
      </div>
      <h2>Current Team</h2>
      <h4>Total Team Points: {teamTotal}</h4>
      {playerDivs}
      <br />
      <h2>Player Choices</h2>
      <div className="container">
        <div>
          <h3>Guards</h3>
          <em>Choose 2:</em>
          <br />
          <br />
          <br />
          <div>
            {guardDivs}
          </div>
        </div>
        <div>
          <h3>Forwards</h3>
          <em>Choose 2:</em>
          <br />
          <br />
          <br />
          <div>
            {forwardDivs}
          </div>
        </div>
        <div>
          <h3>Centers</h3>
          <em>Choose 1:</em>
          <br />
          <br />
          <br />
          <div>
            {centerDivs}
          </div>
        </div>
      </div>
    </>
  );
}