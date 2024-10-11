import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [
                ...prevGameBoard.map((innerArr) => [...innerArr]),
            ];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            console.log(updatedBoard);

            return updatedBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, elIndex) => (
                                <li key={elIndex}>
                                    <button
                                        onClick={() => {
                                            handleSelectSquare(
                                                rowIndex,
                                                elIndex
                                            );
                                        }}
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
