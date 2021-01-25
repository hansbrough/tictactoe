import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => {

  return (
    <div className="board">
      {squares.map((square, idx) =>
        <Square key={idx} onClick={()=>onClick(idx)} value={square} />
      )}
    </div>
  )
};

export default Board;
