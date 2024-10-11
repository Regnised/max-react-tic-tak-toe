export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //         const updatedBoard = [
  //             ...prevGameBoard.map((innerArr) => [...innerArr]),
  //         ];
  //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //         console.log(updatedBoard);

  //         return updatedBoard;
  //     });

  //     onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, elIndex) => (
                <li key={elIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, elIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
