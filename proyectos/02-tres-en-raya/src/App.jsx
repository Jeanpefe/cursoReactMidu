import { useState } from "react";
import confetti from "canvas-confetti";
import './App.css'
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { checkWinner } from "./logic/board.js";

function App() {
	const [board, setBoard] = useState(Array(9).fill(null))

	const [turn, setTurn] = useState(TURNS.X)
	const [winner, setWinner] = useState(null) // null no winner, false -> empate

	const updateBoard = (index) => {
		// no actualizar si ya hay value
		if (board[index] || winner) return

		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)
		console.log(newBoard)

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
		
		const newWinner = checkWinner(newBoard)
		if (newWinner) {
			confetti()
			setWinner(newWinner)
			console.log(winner) // La actualizacion del estado es asincrona, este winner no tiene por que ser el que se ha actualizado
		} else if (checkEndGame(newBoard)) {
			setWinner(false) // empate
		}

	}

	const checkEndGame = (board) => {
		return board.every((square) => square !== null)
	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)
	}

	return (
		<main className='board'>
			<h1>Tres en raya</h1>
			<button onClick={resetGame}>Reiniciar partida</button>
			<section className='game'>
				{
					board.map((_, index) => {
						return (
							<Square
							key={index}
							index={index}
							updateBoard={updateBoard}
							>
								{board[index]}
							</Square>
						)
					})
				}
			</section>

			<section className='turn'>
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>

			<WinnerModal winner={winner} resetGame={resetGame}/>
		</main>
	)
}

export default App
