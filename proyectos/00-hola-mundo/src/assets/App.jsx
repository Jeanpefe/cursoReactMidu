import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
	const jeanpefe = {isFollowing: true, userName: "Jeanpefe2", formatUserName: formatUserName}
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