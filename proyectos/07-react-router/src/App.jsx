import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from '../assets/consts'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname)
		}
		window.addEventListener(EVENTS.PUSHSTATE, onLocationChange) //Cada vez que se dispare el evento NAVIGATION_EVENT se ejecuta la función
		window.addEventListener(EVENTS.POPSTATE, onLocationChange) //Escuchar el evento de dar marcha atrás en el navegador. Se puede hacer de forma nativa, no como el pushState

		return () => { //Función de limpieza
			window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
			window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
		}

	}, [])

  return (
	<main>
		{currentPath === '/' && <HomePage />}
		{currentPath === '/about' && <AboutPage />}
	</main>
  )
}

export default App
