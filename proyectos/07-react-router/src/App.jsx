import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { Router } from './Router'

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
