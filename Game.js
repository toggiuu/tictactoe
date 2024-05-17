import React, { useState } from 'react';
import Board from './Board';
import '../style.css';

function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winnerLine, setWinnerLine] = useState(null);

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) return;
        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);

        const winnerInfo = calculateWinner(newSquares);
        if (winnerInfo) {
            setWinnerLine(winnerInfo.line);
        }
    };

    const handleRetry = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWinnerLine(null);
    };

    const winnerInfo = calculateWinner(squares);
    const winner = winnerInfo ? winnerInfo.player : null;
    const isDraw = !winner && squares.every(square => square !== null);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (isDraw) {
        status = "Draw!";
    } else {
        status = `Next player: ${isXNext ? 'X' : 'O'}`;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={squares} onClick={handleClick} winnerLine={winnerLine} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <button className="retry-button" onClick={handleRetry}>Retry</button>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { player: squares[a], line: lines[i] };
        }
    }
    return null;
}

export default Game;
