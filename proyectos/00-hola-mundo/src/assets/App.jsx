import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
	const jeanpefe = {isFollowing: true, userName: "Jeanpefe", formatUserName: formatUserName} //No suele ser buena practica, por temas de rerenderizado y comprension
    return (
        <section className='App'>
            <TwitterFollowCard {...jeanpefe}>
                Jesús Ángel
            </TwitterFollowCard> 
            
            <TwitterFollowCard 
                formatUserName={formatUserName}
                isFollowing={false} 
                userName="paula1610">
                paula1610
            </TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={formatUserName}
                isFollowing={true} 
                userName="snakeyesmp">
                Snakeyesmp
            </TwitterFollowCard>
        </section>
    )
}