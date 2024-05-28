import React from 'react';
import Square from './Square';

function Board({ squares, onClick, winnerLine }) {
    const renderSquare = (i) => {
        const highlight = winnerLine && winnerLine.includes(i);
        return (
            <Square 
                key={i} 
                value={squares[i]} 
                onClick={() => onClick(i)}
                highlight={highlight} 
            />
        );
    };

    return (
        <div className="board">
            {squares.map((square, i) => renderSquare(i))}
        </div>
    );
}

export default Board;
