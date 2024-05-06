import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate(href) {
	console.log(href)
	window.history.pushState({}, '', href) //Cambia la url pero sin refrescar la página
	//crear un evento personalizado para avisar de que hemos cambiado la url
	const navigationEvent = new Event(NAVIGATION_EVENT)
	window.dispatchEvent(navigationEvent) //Lo despacha para poder ser escuchado (el evento de modificar la url)
}

function HomePage() {
	return (
		<>
		<h1>Home</h1>
		<button onClick={() => navigate('/about')}>Sobre nosotros</button>
		</>
	)
}

function AboutPage() {
	return (
		<>
		<h1>About</h1>
		<button onClick={() => navigate('/')}>Ir a la home</button>
		</>
	)
}

function App() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname)
		}
		window.addEventListener(NAVIGATION_EVENT, onLocationChange) //Cada vez que se dispare el evento NAVIGATION_EVENT se ejecuta la función

		return () => { //Función de limpieza
			window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
