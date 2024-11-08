import React, { useState } from 'react';

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
    const [board,setBoard] = useState(initialBoard)
    const [isNext, setIsNext] = useState(true);
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
   const calculateWineer  = (currentboard) => {
      for(let patter of WINNING_PATTERNS){
           const [a,b,c] = patter
           if(currentboard[a] && currentboard[a] === currentboard[b] && currentboard[a] === currentboard[c]){
             return currentboard[a]
           }
      }
      return null
   }
   const handleClick =(index) => {
     if (winner) return;
     const newBoard = [...board]
     newBoard[index] = isNext ? "X" : "O"
     setBoard(newBoard)
     const newWineer = calculateWineer(newBoard)
     if(newWineer){
       setWinner(newWineer)
     }else{
       setIsNext(!isNext)
     }
   }
   const getMessage = () => {
     return winner ? `Winner is ${winner}` : `Next Player: ${isNext ? "X" : "O"}`;
   };
   const handleReset = () => {
     setWinner(null)
     setBoard(initialBoard)
     setIsNext(true)
   }
     return (
       <div className='mainContainer'>
           <div className='status'>
           {getMessage()}
                   <button onClick={handleReset}>Reset</button>
               </div>
        <div className='board'>
        {
           board.map((b,index) => {
             return(
               <button className='cell' key={index} onClick={() => handleClick(index)}>
                 {b}
               </button>
             )
           })
         }
        </div>
       </div>
     );
}


export default TicTacToe
