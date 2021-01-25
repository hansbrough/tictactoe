import React, {useState}  from "react";
import Board from "./Board";
import {calculateWinner} from "../helper";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);//nested arrays
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);//called everytime "stepNumber" updated
  const xO = xIsNext ? "X" : "O";

  const handleClick = (idx) => {
    //console.log("handleClick")
    //console.log("...history:",history)
    const historyPoint = history.slice(0, stepNumber + 1);
    //console.log("..historyPoint:",historyPoint);
    const current = historyPoint[stepNumber];//get array representing state of board at a given step
    //console.log("...current:",current)
    const squares = [...current];//make a copy
    //return if game won or square is already occupied
    if(winner || squares[idx]) return;
    //select square
    squares[idx] = xO;
    const newHistory = [...historyPoint, squares];//add copy of historyPoint and the current squares array (aka the latest turn)
    //setHistory([...historyPoint, squares]);
    setHistory(newHistory);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (move) => {
    setStepNumber(move)
    setXIsNext(move % 2 === 0);
  }

  const renderMoves = () => history.map((_step, move) => {
    const destination = move ? `Go to move#${move}`: `Go to Start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{destination}</button>
      </li>
    );
  })

  return (
    <>
      <h1 >React TicTacToe w/Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? `Winner: ${winner}` : `Next Player: ${xO}`}</h3>
      </div>
    </>
  )
};

export default Game;
