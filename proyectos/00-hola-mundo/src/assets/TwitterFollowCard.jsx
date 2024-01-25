export function TwitterFollowCard ({ children, formatUserName, userName = 'unknown', isFollowing }) {
	const text = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing ? 'x_card__follow x_card__follow--following' : 'x_card__follow'

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
            <button className={`x_card__follow ${buttonClassName}`}>{text}</button>
        </aside>
    </article>
    )
}