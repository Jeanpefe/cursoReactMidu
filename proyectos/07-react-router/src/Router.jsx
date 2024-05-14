import { useState, useEffect, Children } from "react"
import { EVENTS } from "../assets/consts"
import { match } from "path-to-regexp"

export function Router ({children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) { //El defaultComponent es la página a lo que se muestra si vamos a una ruta que no existe
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

	let routeParams = {}
	//add routes from children <Route /> components
	const routesFromChildren = Children.map(children, ({props, type}) => { //Children es nativo de react, hay que importarlo. Permite iterar, contar, ...
		const { name } = type
		const isRoute = name === 'Route'
		return isRoute ? props : null //en las props está el path y el component
	})

	const routesToUse = routes.concat(routesFromChildren).filter(Boolean) //filtramos caracteres falsos (false, null, 0, "", undefined, y NaN)

	const PageToRender = routesToUse.find(({path}) => {
		if (path === currentPath) return true
		
		//hemos usado path-to-regexp para detectar rutas dinámicas
		//por ejemplo: 
		///search/:query <- :query es una ruta dinamica 

		const matcherUrl = match(path, {decode: decodeURIComponent}) //La función match devuelve una función que nos permite ver si la ruta matchea con lo que pasamos. Con el decode decodificamos parámetros tipo espacios vacios.
		const matched = matcherUrl(currentPath) // /search/js matchea con /search/:query
		if (!matched) return false
		
		//guardar los parametros de la url que eran dinamicos.
		//si la ruta es /search/:query y la ruta /search/javascript, matched.params.query === 'javascript' 
		routeParams = matched.params //{query: 'javascript'} /search/javascript (query indicamos que era la variable en la ruta)
		return true

	})?.Component //CurrentPath es el path de destino, al que todavía no hemos ido
	return PageToRender 
		? <PageToRender routeParams={routeParams}/> 
		: <DefaultComponent routeParams={routeParams}/>
}
