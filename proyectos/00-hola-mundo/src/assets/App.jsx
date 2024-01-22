import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="Jeanpefe" name="Jesús Ángel" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="paula1610" name="Paula" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="snakeyesmp" name="Snakeyesmp" />
        </section>
    )
}