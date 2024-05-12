import {lazy} from 'react'

import './App.css'
import HomePage from './pages/HomePage' //import estático
import { Router } from './Router'
import { Page404 } from './pages/404'
import { SearchPage } from './pages/SearchPage'
import { Route } from './Route'

const LazyAboutPage = lazy(() => import ('./pages/About.jsx')) //import dinámico

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
			<Route path='/about' Component={LazyAboutPage} />
		</Router>

	</main>
  )
}

export default App
