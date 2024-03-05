import { Filters } from "./Filters"

export function Header () {
    return (
        <header>
            <h1>Tienda</h1>
            {<Filters/>}
        </header>
    )
}