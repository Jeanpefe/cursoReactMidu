import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { Router } from './Router'
import { Page404 } from './pages/404'
import { SearchPage } from './pages/SearchPage'
import { Route } from './Route'

const appRoutes = [
	{
		path: '/search/:query',
		Component: SearchPage
	}
	]

function App() {
  return (
	<main>
		<Router routes={appRoutes} defaultComponent={Page404}>
			<Route path='/' Component={HomePage} />
			<Route path='/about' Component={AboutPage} />
		</Router>

	</main>
  )
}

export default App
