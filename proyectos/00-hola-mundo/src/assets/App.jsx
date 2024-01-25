import { useState } from "react"
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
	const [isFollowing, setIsFollowing] = useState(false)
	//Este estado se pasa como prop despues a jeanpefe, pero al pulsar el boton no se cambia porque en el hijo se usa como estado inicial, SOLO SE RENDERIZA UNA VEZ. El estado inicial solo se inicia una vez
	const jeanpefe = {userName: "Jeanpefe", formatUserName: formatUserName, initialIsFollowing: isFollowing} //No suele ser buena practica, por temas de rerenderizado y comprension
	//Cuando queremos pasar una prop para inicializar un estado es buena practica poner initial delante
	//
    return (
        <section className='App'>
            <TwitterFollowCard {...jeanpefe}>
                Jesús Ángel
            </TwitterFollowCard> 
            
            <TwitterFollowCard 
                formatUserName={formatUserName}
                userName="paula1610">
                paula1610
            </TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={formatUserName}
                userName="snakeyesmp">
                Snakeyesmp
            </TwitterFollowCard>
			<button onClick={() => setIsFollowing(!isFollowing)} >Intento cambiar el estado</button>
        </section>
    )
}