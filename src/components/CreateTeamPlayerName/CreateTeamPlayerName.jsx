import React, { useState } from 'react';
import "./CreateTeamPlayerName.css";
import * as teamsAPI from '../../utilities/teams-api';

export default function CreateTeamPlayerName({ player, handleDeletePlayerFromTeam }) {
    console.log({player});
    const [removeOne, setRemoveOne] = useState([]);
    

    return (
        <div className="name">
            <strong>{player.name}</strong>
            <button onClick={() => handleDeletePlayerFromTeam(player._id)} className="red">X</button>
        </div>
    )
}