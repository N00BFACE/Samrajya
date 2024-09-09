import React, { useState, useEffect } from 'react';
import './startNewGame.css';

const getRandomColor = (usedColors) => {
    const letters = '0123456789ABCDEF';
    let color;
    do {
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    } while (usedColors.includes(color));
    return color;
};

const StartNewGame = ({ onBackClick }) => {
    const [playerName, setPlayerName] = useState('');
    const [numPlayers, setNumPlayers] = useState(4);
    const [playerColors, setPlayerColors] = useState([]);
    const [gameLink, setGameLink] = useState('');

    useEffect(() => {
        const initialColors = [];
        for (let i = 0; i < numPlayers; i++) {
            initialColors.push(getRandomColor(initialColors));
        }
        setPlayerColors(initialColors);
    }, [numPlayers]);

    const handlePlayerNameChange = (e) => setPlayerName(e.target.value);
    const handleNumPlayersChange = (e) => {
        const num = parseInt(e.target.value, 10);
        setNumPlayers(num);
    };
    const handlePlayerColorChange = (index, color) => {
        const newColors = [...playerColors];
        newColors[index] = color;
        setPlayerColors(newColors);
    };
    const handleCreateGame = () => {
        // Logic to create game and generate link
        const link = `https://game.example.com/room/${Math.random().toString(36).substr(2, 9)}`;
        setGameLink(link);
    };

    return (
        <div className="card">
            <h2>Create a new game</h2>
            <input
                type="text"
                placeholder="Enter your name"
                value={playerName}
                onChange={handlePlayerNameChange}
            />
            <div>
                <label>Number of players:</label>
                <select className="dropdown" value={numPlayers} onChange={handleNumPlayersChange}>
                    {[4, 5, 6, 7].map(num => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            </div>
            {playerColors.map((color, index) => (
                <div key={index}>
                    <label>Player {index + 1} color:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => handlePlayerColorChange(index, e.target.value)}
                    />
                </div>
            ))}
            <button className="btn" onClick={handleCreateGame}>Create Game</button>
            {gameLink && (
                <div>
                    <p>Game link: <a href={gameLink} target="_blank" rel="noopener noreferrer">{gameLink}</a></p>
                    <button onClick={() => navigator.clipboard.writeText(gameLink)}>Copy Link</button>
                </div>
            )}
            <button className="btn" onClick={onBackClick}>Back</button>
        </div>
    );
};

export default StartNewGame;