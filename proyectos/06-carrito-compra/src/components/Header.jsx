import { Filters } from "./Filters"

export function Header ({children}) {
    return (
        <header>
            <h1>Tienda</h1>
            {children}
        </header>
    )
}