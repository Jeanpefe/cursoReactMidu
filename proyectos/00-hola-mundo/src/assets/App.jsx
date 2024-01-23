import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    const formattedUserName = <span>@Jeanpefe</span>
    return (
        <section className='App'>
            <TwitterFollowCard 
                formattedUserName={formattedUserName}
                isFollowing={true} 
                userName="Jeanpefe" 
                name="Jesús Ángel" 
            />
            
            <TwitterFollowCard 
                formattedUserName={formattedUserName}
                isFollowing={false} 
                userName="paula1610" 
                name="Paula" 
            />
            
            <TwitterFollowCard 
                formattedUserName={formattedUserName}
                isFollowing={true} 
                userName="snakeyesmp" 
                name="Snakeyesmp" 
            />
        </section>
    )
}