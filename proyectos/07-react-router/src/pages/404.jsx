import { Link } from "../Link"

export function Page404 () {
    return (
        <div>
            <h1>Route not found</h1>
            <Link to='/'>Volver a la home</Link>
        </div>
    )
}