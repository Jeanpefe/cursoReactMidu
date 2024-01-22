import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="Jeanpefe" name="Jesús Ángel" />
            <TwitterFollowCard userName="paula1610" name="Paula" />
            <TwitterFollowCard userName="snakeyesmp" name="Snakeyesmp" />
        </section>
    )
}