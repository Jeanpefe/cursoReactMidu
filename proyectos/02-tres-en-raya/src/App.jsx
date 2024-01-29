import { useState } from "react";
import confetti from "canvas-confetti";
import './App.css'
const TURNS = {
	X: 'x',
	O: 'o'
}


const Square = ({ children, isSelected, updateBoard, index }) => {
	const className = `square ${isSelected ? 'is-selected' : ''}`

	const handleClick = () => {
		updateBoard(index)
	}

	return (
		<div onClick={handleClick} className={className}>
			{children}
		</div>
	)
}

const WINNER_COMBOS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

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

	const checkWinner = (board) => {
		for (const combo of WINNER_COMBOS) {
			const [a, b, c] = combo
			if (
				board[a] &&
				board[a] === board[b] &&
				board[a] === board[c]
			)
			return board[a]
		}
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

			{
				winner !== null && (
					<section className="winner">
						<div className="text">
							<h2>
								{
									winner === false ? 'Empate' : `Ganó:`
								}
							</h2>

							<header className="win">
								{winner && <Square>{winner}</Square>}
							</header>
							<footer>
								<button onClick={resetGame}>Empezar de nuevo</button>
							</footer>
						</div>
					</section>
				)
			}
		</main>
	)
}

export default App
