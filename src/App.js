import React, { useState } from "react";
import "./App.css";
import { Board } from "./componets/Board";
import { ScoreBoard } from "./componets/ScoreBoard";
import { ResetButton } from "./componets/ResetButton";

function App() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPLaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore: 0, oScore: 0})
  const [gameOver,setGameOver] = useState(false)

  const clickHandler = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPLaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard)

    if(winner){
      if(winner === 'O'){
        let {oScore} = scores
        oScore++
        setScores({...scores, oScore})
      }else{
        let {xScore} = scores
        xScore++
        setScores({...scores, xScore})
      }
    }

    setBoard(updatedBoard);

    setXPlaying(!xPLaying);
  };
    const checkWinner = (board) => {
      for(let i = 0; i < winConditions.length; i++){
        const [x,y,z] = winConditions[i]
        
        if (board[x] && board[x] === board[y] && board[y] === board[z]){
          setGameOver(true)
            return board[x]
        }
      }
    }

    const resetBoard = () =>{
      setGameOver(false)
      setBoard(Array(9).fill(null));
    }
    const resetBtn = () =>{
      setBoard(Array(9).fill(null));
    }

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPLaying}/>
      <Board board={board} onClick={gameOver ? resetBoard : clickHandler} />
      <ResetButton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
