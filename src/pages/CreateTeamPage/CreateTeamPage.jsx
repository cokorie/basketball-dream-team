import React, { useEffect, useState, useRef } from 'react';
import "./CreateTeamPage.css";
import * as teamsAPI from '../../utilities/teams-api';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

export default function CreateTeamPage({ players }) {
  const [team, setTeam] = useState(null);

  const navigate = useNavigate();

  let guardDivs, forwardDivs, centerDivs;
  if(team) {
    const guards = players.filter(player => player.position === 'Guard' && !team.players.some(p => p._id === player._id));
    guardDivs = guards.map(guard =>
      <div>
        {guard.name}
        <button onClick={() => handleAddPlayerToTeam(guard._id)}>ADD</button>
      </div>)
    const forwards = players.filter(player => player.position === 'Forward' && !team.players.some(p => p._id === player._id));
    forwardDivs = forwards.map(forward =>
      <div>
        {forward.name}
        <button onClick={() => handleAddPlayerToTeam(forward._id)}>ADD</button>
      </div>)
    const centers = players.filter(player => player.position === 'Center' && !team.players.some(p => p._id === player._id));
    centerDivs = centers.map(center =>
      <div>
        {center.name}
        <button onClick={() => handleAddPlayerToTeam(center._id)}>ADD</button>
      </div>)
  }


  useEffect(function() {
    async function getTeam() {
      const team = await teamsAPI.getTeam();
      setTeam(team);
    }
    getTeam();
  }, []);


  async function handleAddPlayerToTeam(playerId) {
    const updatedTeam = await teamsAPI.addPlayerToTeam(playerId);
    setTeam(updatedTeam);
  }


  // async function handleCreate() {
  //   await teamsAPI.create();
  //   navigate('/teams');
  // }

  if(!team) return null;

  return (
    <>
      <h1>Current Team</h1>
      {team.players.map(player => <PlayerCard player={player}/>)}
      <h1>Create a Team</h1>
      <div className="container">
        <div>
          <h3>Guards</h3>
          <em>Choose 2:</em>
          <br />
          <div>
            {guardDivs}
          </div>
        </div>
        <div>
          <h3>Forwards</h3>
          <em>Choose 2:</em>
          <br />
          <div>
              {forwardDivs}
          </div>
        </div>
        <div>
          <h3>Centers</h3>
          <em>Choose 1:</em>
          <br />
          <div>
              {centerDivs}
          </div>
        </div>
        <div>
          <h3>Your Team</h3>
          <input type="text" placeholder="Team Name" />
          <div>
            <i>Your Team Here</i>
          </div>
          <button type="submit">Create Your Team</button>
        </div>
      </div>
    </>
  );
}