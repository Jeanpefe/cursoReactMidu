import { createContext, useState } from "react"

//Creamos el coontexto. Es el que tenemos que consumir
export const FiltersContext = createContext()

//Creamos el Provider del contexto. Es el que nos provee de acceso
export function FiltersProvider({children}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0        
    })
    return (
        <FiltersContext.Provider value={{
            //Aquí va la información a la que queramos acceder
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}