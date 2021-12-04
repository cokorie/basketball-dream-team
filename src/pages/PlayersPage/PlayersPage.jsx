import React, { useEffect, useState } from 'react';
import "./PlayersPage.css";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import * as playersAPI from '../../utilities/players-api';

export default function PlayersPage({players}) {
  return (
    <>
      <h1>All Available Players</h1>
    <div className="container">
        {players.map((p, i) => <PlayerCard player={p} key={i}/>)}
    </div>
    </>
  );
}