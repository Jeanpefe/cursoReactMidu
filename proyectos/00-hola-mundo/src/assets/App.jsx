import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName}
                isFollowing={true} 
                userName="Jeanpefe">
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