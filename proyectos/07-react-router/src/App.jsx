import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { Router } from './Router'
import { Page404 } from './pages/404'

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
		]} defaultComponent={Page404}/>
	</main>
  )
}

export default App
