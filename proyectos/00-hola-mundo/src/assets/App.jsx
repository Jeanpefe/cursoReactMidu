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

	const users = [
		{
			userName: "Jeanpefe",
			name: "Jesús Ángel",
			isFollowing: true
		},
		{
			userName: "paula1610",
			name: "paula1610",
			isFollowing: false
		},
		{
			userName: "snakeyesmp",
			name: "Snakeyesmp",
			isFollowing: true
		}
	]

    return (
        <section className='App'>
			{
				users.map(user => {
					const { userName, name, isFollowing } = user 
					return (
						<TwitterFollowCard 
							userName={userName} 
							isFollowing={isFollowing}
							formatUserName={formatUserName}
						>
							{name}
						</TwitterFollowCard>
					)
				})
			}
        </section>
    )
}