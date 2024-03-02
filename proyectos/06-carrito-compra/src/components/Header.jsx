import { Filters } from "./Filters"

export function Header ({changeFilters}) {
    return (
        <header>
            <h1>Tienda</h1>
            <Filters changeFilters={changeFilters}/>
        </header>
    )
}