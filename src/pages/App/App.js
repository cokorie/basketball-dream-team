import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AboutPage from '../AboutPage/AboutPage';
import CreateTeamPage from '../CreateTeamPage/CreateTeamPage';
import MyTeamsPage from '../MyTeamsPage/MyTeamsPage';
import PlayersPage from '../PlayersPage/PlayersPage';
import NavBar from '../../components/NavBar/NavBar';
import * as playersAPI from '../../utilities/players-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [players, setPlayers] = useState([]);
 
  useEffect(function() {
    async function getPlayers() {
      const players = await playersAPI.getAll();
      setPlayers(players);
    }
    getPlayers();
 }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/create" element={<CreateTeamPage players={players} />} />
            <Route path="/myteams" element={<MyTeamsPage />} />
            <Route path="/players" element={<PlayersPage players={players} />} />
            <Route path="/*" element={<Navigate to="/about" />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
