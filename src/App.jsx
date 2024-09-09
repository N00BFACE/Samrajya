import React, { useState } from 'react';
import './App.css';
import StartNewGame from './startNewGame';

function App() {
    const [showStartNewGame, setShowStartNewGame] = useState(false);

    const handleStartNewGameClick = () => {
        setShowStartNewGame(true);
    };

    const handleBackClick = () => {
        setShowStartNewGame(false);
    };

    return (
        <>
            <h1 className='title'>Samrajya</h1>
            {!showStartNewGame && (
                <div className="card">
                    <button className="btn" onClick={handleStartNewGameClick}>Start a new game</button>
                    <button className="btn">Join a game</button>
                    <button className="btn">Settings</button>
                    <button className="btn">How to Play?</button>
                    <button className="btn">About</button>
                </div>
            )}
            {showStartNewGame && <StartNewGame onBackClick={handleBackClick} />}
        </>
    );
}

export default App;