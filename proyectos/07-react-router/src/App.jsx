import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from '../assets/consts'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const routes = [
	{
		path: '/',
		Component: HomePage
	},
	{
		path: '/about',
		Component: AboutPage
	}
]

function Router ({routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
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
	console.log(currentPath)
	const PageToRender = routes.find(({path}) => path === currentPath)?.Component //CurrentPath es el path de destino, al que todavía no hemos ido
	return PageToRender ? <PageToRender /> : <DefaultComponent />
}

function App() {


  return (
	<main>
		<Router routes={[
		{
			path: '/',
			Component: HomePage
		},
		{
			path: '/about',
			Component: AboutPage
		}
		]} />
	</main>
  )
}

export default App
