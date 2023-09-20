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
  const currentPlayer = playerByMove(currentMove);

  // Add the new board state to the history and update the current move
  function handleMove(newSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Determines the player based on the move number
  function playerByMove(move) {
    return move % 2 === 0 ? 'X' : 'O';
  }

  // Clear the board and set the current player to X
  function reset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  // Create a list for the history of moves, excluding the initial empty state
  const moves = history.map((squares, i) => {
    if (i === 0) {
      return;
    }

    // Determine the index of the last modified square
    const previousSquares = history[i - 1];
    let newSquareIndex;
    squares.forEach((square, i) => {
      if (previousSquares[i] !== square) {
        newSquareIndex = i;
      }
    });

    return (
      <li key={i}>
        <button className="btn btn-sm btn-secondary mb-1"
          onClick={() => setCurrentMove(i)}>
            {
              `Move #${i} —
              (${playerByMove(i - 1)}:
              ${(newSquareIndex % 3) + 1},
              ${Math.floor(newSquareIndex / 3) + 1})`
            }
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