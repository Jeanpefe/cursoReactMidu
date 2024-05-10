import { EVENTS } from "../assets/consts"

export function navigate(href) {
	window.history.pushState({}, '', href) //Cambia la url pero sin refrescar la página
	//crear un evento personalizado para avisar de que hemos cambiado la url
	const navigationEvent = new Event(EVENTS.PUSHSTATE)
	window.dispatchEvent(navigationEvent) //Lo despacha para poder ser escuchado (el evento de modificar la url)
}

export function Link ({target, to, ...props}) {
    const handleClick = (event) => {
        
        const isMainEvent = event.button === 0 //primary click (izquierdo o derecho del ratón según preferencia)
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'
        
        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault() //PreventDefaultddddd para evitar el comportamiento por defecto (ir a la página) y que se renderice la nueva url en vez de funcionar como un SPA
            navigate(to)
        } 
    }
    return <a onClick={handleClick} href={to} target={target} {...props} />
}