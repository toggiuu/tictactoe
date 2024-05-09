import React, { useState } from 'react';
import Board from './Board';

function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) return;
        squares[index] = isXNext ? 'X' : 'O';
        setSquares(squares);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${isXNext ? 'X' : 'O'}`;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={squares} onClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{status}</div>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    // 승리 조건 계산
}

export default Game;
