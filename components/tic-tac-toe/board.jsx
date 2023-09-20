import Square from "./square";
import styles from "./tic-tac-toe.module.css";

export default function Board({ currentPlayer, currentMove, squares, onMove, resetGame }) {
  // Check for a winner and update the board's status message
  const winningLine = calculateWinner();
  let status;

  if (winningLine) {
    status = `Winner: ${squares[winningLine[0]]}`;
  } else if (currentMove === 9) {
    status = 'Draw!'
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

  // Checks for a winning line
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
        return lines[i];
      }
    }

    return null;
  }

  return (
    <div className="d-flex flex-column">
      <h4 className="text-center">{status}</h4>
      <div className={styles.board}>
        {
          Array(9).fill().map((_, i) => {
            return (
              <Square key={i} value={squares[i]}
                winning={winningLine && winningLine.includes(i)}
                onSquareClick={() => handleSquareClick(i)}/>
            )
          })
        }
      </div>
      <div className="d-flex mt-1">
        <button onClick={resetGame} className="btn btn-primary">Reset</button>
      </div>
    </div>
  );
}
