import { createContext } from "react"

//Creamos el coontexto
export const FiltersContext = createContext()

//Creamos el Provider del contexto
export function FiltersProvider({children}) {
    return (
        <FiltersContext.Provider value={{
            //Aquí va la información a la que queramos acceder
            category: 'all',
            minPrice: 0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}