import { useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate(href) {
	window.history.pushState({}, '', href) //Cambia la url pero sin refrescar la página
	//crear un evento personalizado para avisar de que hemos cambiado la url
	const navigationEvent = new Event(NAVIGATION_EVENT)
	window.dispatchEvent(navigationEvent) //Lo despacha para poder ser escuchado (el evento de modificar la url)
}

function HomePage() {
	return (
		<>
		<h1>Home</h1>
		<a href='/about'>Sobre nosotros</a>
		</>
	)
}

function AboutPage() {
	return (
		<>
		<h1>About</h1>
		<a href='/'>Ir a la home</a>
		</>
	)
}

function App() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
	<main>
		{currentPath === '/' && <HomePage />}
		{currentPath === '/about' && <AboutPage />}
	</main>
  )
}

export default App
