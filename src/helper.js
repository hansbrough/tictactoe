export function calculateWinner(squares) {
  //indexes of possible winning square combos
  const winningSquareCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  //look through each potential winning combo
  for (let i = 0; i < winningSquareCombos.length; i++) {
    const [a, b, c] = winningSquareCombos[i];
    //compare a winning combo of indexes with array of indexes in squares.
    //look for all 3 squares having the same val e.g. 'x','x','x'
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; //return winning team val ('x' or 'o') when 3 matching
    }
  }
  return null;
}
