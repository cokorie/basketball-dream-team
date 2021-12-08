import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
    return (
        <>
            <h1>What Exactly Is the Basketball Dream Team Calculator?</h1>
            <p>Welcome to the Basketball Dream Team Calculator, where you can create the greatest team of all time!</p>
            <p>The Dream Team Calculator is a fun app used to determine what would be the greatest of all time (GOAT) basketball team, if you were able to choose from the greatest players of all time.</p>
            <p>The metrics used for each player are their points per game (PPG), rebounds per game (RPG), assists per game (APG) and the championships (rings) they won throughout their career.</p>
            <p>These metrics are calculated by adding up the points each player earns, and can be compared with other people's created teams to see who has the greater team.</p>
            <p>Each team is comprised of 2 guards, 2 forwards and 1 center.</p>
            <br />
            <h3>Below is the points breakdown:</h3>
            <ul>
                <li>PPG: <strong>7x</strong> their original amount</li>
                <li>RPG: <strong>4x</strong> their original amount</li>
                <li>APG: <strong>5x</strong> their original amount</li>
                <li>Championships: <strong>10x</strong> their original amount</li>
            </ul>
            <br />
            <p>🐐 Have fun creating the greatest team! 🐐</p>
        </>
    );
}