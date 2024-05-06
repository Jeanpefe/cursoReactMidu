import { EVENTS } from "../assets/consts"

export function navigate(href) {
	window.history.pushState({}, '', href) //Cambia la url pero sin refrescar la página
	//crear un evento personalizado para avisar de que hemos cambiado la url
	const navigationEvent = new Event(EVENTS.PUSHSTATE)
	window.dispatchEvent(navigationEvent) //Lo despacha para poder ser escuchado (el evento de modificar la url)
}

export function Link ({target, to, ...props}) {
    const handleClick = () => {
        navigate(to)
    }
    return <a onClick={handleClick} href={to} target={target} {...props} />
}