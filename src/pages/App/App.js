import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AboutPage from '../AboutPage/AboutPage';
import CreateTeamPage from '../CreateTeamPage/CreateTeamPage';
import MyTeamsPage from '../MyTeamsPage/MyTeamsPage';
import PlayersPage from '../PlayersPage/PlayersPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/create" element={<CreateTeamPage />} />
            <Route path="/myteams" element={<MyTeamsPage />} />
            <Route path="/players" element={<PlayersPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
