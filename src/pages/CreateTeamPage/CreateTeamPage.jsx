import React, { useEffect, useState, useRef } from 'react';
import "./CreateTeamPage.css";
import * as playersAPI from '../../utilities/players-api';
import * as teamsAPI from '../../utilities/teams-api';
import { useNavigate } from 'react-router';

export default function CreateTeamPage({ players }) {
  const [team, setTeam] = useState(null);
  const [activePos, setActivePos] = useState('');
  const [teamList, setTeamList] = useState([]);

  const positionsRef = useRef([]);
  const navigate = useNavigate();

  const guards = players.filter(player => player.position === 'Guard');
  const guardOptions = guards.map(guard =>
    <option value={guard.name}>
      {guard.name}
    </option>)
  const forwards = players.filter(player => player.position === 'Forward');
  const forwardOptions = forwards.map(forward =>
    <option value={forward.name}>
      {forward.name}
    </option>)
  const centers = players.filter(player => player.position === 'Center');
  const centerOptions = centers.map(center =>
    <option value={center.name}>
      {center.name}
    </option>)


  useEffect(function() {
    async function getPlayers() {
      const players = await playersAPI.getAll();
      positionsRef.current = players.reduce((positions, player) => {
        const pos = player.position.name;
        return positions.includes(pos) ? positions : [...positions, pos]
      }, []);
      activePos(positionsRef.current[1]);
      setTeamList(players);
    }
    getPlayers();

    async function getTeam() {
      const team = await teamsAPI.getTeam();
      setTeam(team);
    }
    getTeam();
  }, []);

  async function handleAddToTeam(playerId) {
    const updatedTeam = await teamsAPI.addPlayerToTeam(playerId);
    setTeam(updatedTeam);
  }

  async function handleCreate() {
    await teamsAPI.create();
    navigate('/teams');
  }

  return (
    <>
      <h1>Create a Team</h1>
      <div className="container">
        <div>
          <h3>Guards</h3>
          <em>Choose 2:</em>
          <br />
          <div>
            <select name="guards" multiple>
              {guardOptions}
            </select>
          </div>
          <br />
          <button type="submit">Add Guard</button>
        </div>
        <div>
          <h3>Forwards</h3>
          <em>Choose 2:</em>
          <br />
          <div>
            <select name="forwards" multiple>
              {forwardOptions}
            </select>
          </div>
          <br />
          <button type="submit">Add Forward</button>
          <br />
        </div>
        <div>
          <h3>Centers</h3>
          <em>Choose 1:</em>
          <br />
          <div>
            <select name="" multiple>
              {centerOptions}
            </select>
          </div>
          <button type="submit">Add Center</button>
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