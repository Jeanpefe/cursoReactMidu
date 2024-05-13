import {Suspense, lazy} from 'react'

import './App.css'
// import HomePage from './pages/HomePage' //import estático
import { Router } from './Router'
import { Page404 } from './pages/404'
import { Route } from './Route'

const LazyAboutPage = lazy(() => import ('./pages/AboutPage.jsx')) //import dinámico (Lazy Loading)
const LazySearchPage = lazy(() => import ('./pages/SearchPage.jsx')) //import dinámico (Lazy Loading)
const LazyHomePage = lazy(() => import ('./pages/HomePage.jsx')) //import dinámico (Lazy Loading)

const appRoutes = [
	{
		path: '/search/:query',
		Component: LazySearchPage
	},
	{
		path: '/:lang/about',
		Component: LazyAboutPage
	}
	]

function App() { //Ponemos el Suspense porque no sabemos si se ha cargado el LazyAboutPage, sino...
  return (//el fallback es lo que se tiene que renderizar hasta que cargue lo que está con lazy loading. En DevTools -> Network, se pueden simular redes más lentas para mostrar este efecto
	<main>
		<Suspense fallback={<div>Cargando...</div>}> 
			<Router routes={appRoutes} defaultComponent={Page404}>
				<Route path='/' Component={LazyHomePage} />
				<Route path='/about' Component={LazyAboutPage} />
			</Router>
		</Suspense>
	</main>
  )
}

export default App
