import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import StartNewGame from './startNewGame';

function App() {
    return (
        <Router>
            <div>
                <h1 className='title'>Samrajya</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/start-new-game" element={<StartNewGame />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div className="card">
            <Link to="/start-new-game">
                <button className="btn">Start a new game</button>
            </Link>
            <button className="btn">Join a game</button>
            <button className="btn">Settings</button>
            <button className="btn">How to Play?</button>
            <button className="btn">About</button>
        </div>
    );
}

export default App;