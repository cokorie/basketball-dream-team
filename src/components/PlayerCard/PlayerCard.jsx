import React from 'react';
import "./PlayerCard.css";

export default function PlayerCard({ player }) {
    return (
        <div className="card">
            <u><strong>{player.name}</strong></u>
            <br />
            <div className="ch1">
                {player.position}
            </div>
            <br />
            PPG: {player.ppg}
            <br />
            RPG: {player.rpg}
            <br />
            APG: {player.apg}
            <br />
            <div className="ch2">
                <br />
                Championships: {player.rings}
            </div>
            <br />
        </div>
    )
}