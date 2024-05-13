import {Suspense, lazy} from 'react'

import './App.css'
import HomePage from './pages/HomePage' //import estático
import { Router } from './Router'
import { Page404 } from './pages/404'
import { SearchPage } from './pages/SearchPage'
import { Route } from './Route'

const LazyAboutPage = lazy(() => import ('./pages/AboutPage.jsx')) //import dinámico

const appRoutes = [
	{
		path: '/search/:query',
		Component: SearchPage
	}
	]

function App() { //Ponemos el Suspense porque no sabemos si se ha cargado el LazyAboutPage, sino...
  return (
	<main>
		<Suspense> 
			<Router routes={appRoutes} defaultComponent={Page404}>
				<Route path='/' Component={HomePage} />
				<Route path='/about' Component={LazyAboutPage} />
			</Router>
		</Suspense>
	</main>
  )
}

export default App
