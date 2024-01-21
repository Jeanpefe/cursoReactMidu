export function TwitterFollowCard ({ userName, name, isFollowing }) {
    return (
    <article className="x_card">
        <header className='x_card__info'>
            <img className="x_card__image" alt="avatar de Jeanepfe" src={`https://unavatar.io/${userName}`} />
            <div className="x_card__text">
                <strong className="x_card__name">{name}</strong>
                <span className="x_card__username">{username}</span>
            </div>
        </header>

        <aside className="x_card__aside">
            <button className="x_card__follow">Seguir</button>
        </aside>
    </article>
    )
}