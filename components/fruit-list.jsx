export default function FruitList({ fruits }) {
  return (
    <ol>
      {fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>)}
    </ol>
  );
}