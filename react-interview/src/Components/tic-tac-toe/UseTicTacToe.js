import React, { useState } from 'react'
const initailBoard = () => Array(9).fill(null)

const UseTicTacToe = () => {

    const [board, setBoard] = useState(initailBoard())
    const [isXNext, setIsXNext] = useState(true);


    const calculateWinner = (currentBoard) => {
        for (let pattern of WINNING_PATTERNS) {
            const [a, b, c] = pattern;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        console.log('clicled')

        // check wiiner
        const winner = calculateWinner(board)
        if (winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O"
        setBoard(newBoard)
        setIsXNext(!isXNext)


    }

    const getStatusMessage = () => {
        const winner = calculateWinner(board);
        if (winner) {
            return `Winner: ${winner}`;
        } else if (board.every(cell => cell)) {
            return 'Draw!';
        } else {
            return `Next player: ${isXNext ? 'X' : 'O'}`;
        }
    };

    const resetGame = () => {
        setBoard(initailBoard());
        setIsXNext(true);
    };

    return { board, calculateWinner, handleClick, getStatusMessage, resetGame }
}

export default UseTicTacToe