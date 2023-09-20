import styles from "./tic-tac-toe.module.css";

export default function Square({ value, winning, onSquareClick }) {
  return (
    <button
      className={`btn btn-lg btn-outline-secondary ${styles.square} ${winning ? styles.winning : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}