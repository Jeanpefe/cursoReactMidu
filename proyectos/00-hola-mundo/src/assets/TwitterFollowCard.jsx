import { useState } from "react"

export function TwitterFollowCard ({ children, formatUserName, userName = 'unknown', initialIsFollowing}) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing) //useState devuelve un array, el primer elemento el valor del estado y el segundo una función para actualizarlo


	const text = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing ? 'x_card__follow x_card__follow--following' : 'x_card__follow'

	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}
	return (
    <article className="x_card">
        <header className='x_card__info'>
            <img className="x_card__image" alt="avatar de Jeanepfe" src={`https://unavatar.io/${userName}`} />
            <div className="x_card__text">
                <strong className="x_card__name">{children}</strong>
                <span className="x_card__username">{formatUserName(userName)}</span>
            </div>
        </header>

        <aside className="x_card__aside">
            <button className={buttonClassName} onClick={handleClick} >
				<span className="x_card__text">{text}</span>
				<span className="x_card__stopFollow">Dejar de seguir</span>
			</button>
        </aside>
    </article>
    )
}