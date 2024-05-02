import { useState } from 'react'
import './App.css'

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
