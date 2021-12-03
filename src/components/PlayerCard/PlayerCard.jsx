import React from 'react';

export default function PlayerCard({ player }) {
    return (
        <>
            <div>
                {player.name}
                <br />
                {player.ppg}
                <br />
                {player.rpg}
                <br />
                {player.apg}
                <br />
                {player.rings}
            </div>
        </>
    )
}