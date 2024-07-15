import React, { useState } from 'react';

const initialBoard = Array(9).fill(null);

export const TicTacToe = () => {
    // State for the game board, initially an array of 9 nulls
    const [board, setBoard] = useState(initialBoard);
    // State to keep track of whose turn it is, X starts first
    const [isXNext, setIsXNext] = useState(true);
    // State to keep track of the winner
    const [winner, setWinner] = useState(null);

    const WINNING_PATTERNS = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Leading diagonal
        [2, 4, 6]  // Anti-diagonal
    ];

    const calculateWinner = (currentBoard) => {
        for (let pattern of WINNING_PATTERNS) {
            const [a, b, c] = pattern;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }
        return null;
    }

    // Function to handle a click on a board cell
    const handleOnClick = (index) => {
        // If there's already a winner , return
        if (winner) return;
        // Create a copy of the current board
        const newBoard = [...board];
        // Set the clicked cell to "X" or "O" depending on whose turn it is
        newBoard[index] = isXNext ? "X" : "O";
        // Update the board state with the new board
        setBoard(newBoard);
        // Check if there's a winner
        const newWinner = calculateWinner(newBoard);
        if (newWinner) {
            setWinner(newWinner);
        } else {
            // Toggle the turn to the next player
            setIsXNext(!isXNext);
        }
    }

    const getStatusMessage = () => {
        if (winner) {
            return `Winner: ${winner}`;
        } else if (board.every(cell => cell)) {
            return 'Draw!';
        } else {
            return `Next player: ${isXNext ? 'X' : 'O'}`;
        }
    };

    const handleReset = () => {
        setBoard(initialBoard);
        setIsXNext(true);
        setWinner(null);
    }

    return (
        <div className='game'>
            <div className='status'>
                {getStatusMessage()}
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className='board'>
                {
                    board.map((b, index) => {
                        return <button
                            key={index}
                            className='cell'
                            onClick={() => handleOnClick(index)}
                            disabled={b !== null}
                        >{b}
                        </button>
                    })
                }
            </div>
        </div>
    );
}
