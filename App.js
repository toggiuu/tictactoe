import React from 'react';
import Game from './components/Game';
import './style.css';
import backgroundImage from './wood.jpg'; // 이미지 파일을 import

function App() {
    return (
        <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>Tic Tac Toe</h1>
            <Game />
        </div>
    );
}

export default App;
