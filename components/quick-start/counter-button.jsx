export default function CounterButton({ count, onClick }) {
  return (
    <button onClick={onClick} className="btn btn-primary mb-2">
      Clicked {count} times
    </button>
  );
}