import Square from "./square";

export default function Board({ currentPlayer, currentMove, squares, onMove, resetGame }) {
  // Check for a winner and update the board's status message
  const winner = calculateWinner();
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Move ${currentMove + 1}: ${currentPlayer}'s Turn`;
  }

  function handleSquareClick(i) {
    // Ignore the click if the square is already occupied
    if (squares[i] !== null || calculateWinner()) {
      return;
    }

    // Create a copy of the state of the board
    const nextSquares = [...squares]

    // Mark the player's move
    nextSquares[i] = currentPlayer;

    // Update the board
    onMove(nextSquares);
  }

  // Determine the winner, if any
  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="d-flex flex-column">
      <h4 className="text-center">{status}</h4>
      <div className="d-flex">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="d-flex">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="d-flex">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
      <div className="d-flex mt-1">
        <button onClick={resetGame} className="btn btn-primary">Reset</button>
      </div>
    </div>
  );
}
