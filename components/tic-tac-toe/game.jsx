import { useState } from "react";
import Board from "./board";
import styles from "./tic-tac-toe.module.css"

export default function Game() {
  // Store the history of moves, starting with an empty board
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // Keep track of the current move for time travelling
  const [currentMove, setCurrentMove] = useState(0);

  // The current state of the board
  const currentSquares = history[currentMove];

  // The current player, determined by the current move number
  const currentPlayer = currentMove % 2 === 0 ? 'X' : 'O';

  // Add the new board state to the history and update the current move
  function handleMove(newSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Clear the board and set the current player to X
  function reset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  // Create a list for the history of moves, excluding the initial empty state and current move
  const moves = history.slice(1, history.length - 1).map((squares, i) => {
    return (
      <li key={i}>
        <button className="btn btn-sm btn-secondary mb-1"
          onClick={() => setCurrentMove(i + 1)}>
            {`Go to Move #${i + 1}`}
        </button>
      </li>
    );
  });

  return (
    <div className="d-flex flex-column my-4">
      <div className="d-flex">
        <Board currentPlayer={currentPlayer} currentMove={currentMove} squares={currentSquares} onMove={handleMove} resetGame={reset} />
        <div className={styles.history}>
          <h5>History</h5>
          <ol className="list-unstyled">{moves}</ol>
        </div>
      </div>
    </div>
  );
}