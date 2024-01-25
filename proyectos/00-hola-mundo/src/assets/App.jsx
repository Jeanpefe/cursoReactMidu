import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
	const jeanpefe = {userName: "Jeanpefe", formatUserName: formatUserName} //No suele ser buena practica, por temas de rerenderizado y comprension
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