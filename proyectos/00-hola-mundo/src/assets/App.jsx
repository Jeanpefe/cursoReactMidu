import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
	const jeanpefe = {userName: "Jeanpefe", formatUserName: formatUserName, initialIsFollowing: true} //No suele ser buena practica, por temas de rerenderizado y comprension
	//Cuando queremos pasar una prop para inicializar un estado es buena practica poner initial delante
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
        </section>
    )
}