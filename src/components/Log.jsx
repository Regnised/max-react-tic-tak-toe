export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ square: { row, col }, player }) => (
        <li key={`${row}${col}`}>
          {player} clicked on row: {row}, col: {col}
        </li>
      ))}
    </ol>
  );
}
