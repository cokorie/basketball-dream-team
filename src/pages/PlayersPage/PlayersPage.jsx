import React from 'react';
import PlayerCard from "../../components/PlayerCard/PlayerCard";

export default function PlayersPage({ players }) {

  return (
    <>
      <h1>All Available Players</h1>
      <ul>
        {players.map((p) => <PlayerCard name={p} key={p}/>)}
      </ul>
    </>
  );
}