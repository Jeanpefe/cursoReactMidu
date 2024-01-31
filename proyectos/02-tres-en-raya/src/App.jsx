import { useState } from "react";
import confetti from "canvas-confetti";
import './App.css'
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { checkWinner } from "./logic/board.js";
import { checkEndGame } from "./logic/board.js";

function App() {
	const [board, setBoard] = useState(() => {
		const boardFromStorage = window.localStorage.getItem('board') // Leer del localStorage es lento, es mejor meterlo aquí que justo encima, ya que de la otra forma se leería cada vez que se renderice algo 
		return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null) 
	}) // <---- COMENTARIO IMPORTANTE USE STATE: ¡¡¡Nunca puede estar dentro de un if, ni de un else, ni for...!!! Esto es asi porque react lo primero que hace es buscar donde estan los useState y si está dentro de algo de lógica se vuelve loco

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = window.localStorage.getItem('turn')
		return turnFromStorage ? turnFromStorage : TURNS.X
	})
	const [winner, setWinner] = useState(null) // null no winner, false -> empate

	const updateBoard = (index) => {
		// no actualizar si ya hay value
		if (board[index] || winner) return

		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
		// Guardar partida
		window.localStorage.setItem('board', JSON.stringify(newBoard)) // hay que guardar un string, no vale el newBoard directamente
		window.localStorage.setItem('turn', newTurn)
		// Revisar ganador
		const newWinner = checkWinner(newBoard)
		if (newWinner) {
			confetti()
			setWinner(newWinner)
			console.log(winner) // La actualizacion del estado es asincrona, este winner no tiene por que ser el que se ha actualizado
		} else if (checkEndGame(newBoard)) {
			setWinner(false) // empate
		}

	}

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)
		window.localStorage.removeItem('board')
		window.localStorage.removeItem('turn')
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
