import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const {setFilters} = useFilters()

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        //estamos pasando la funcion de actualizar estado nativa de React a un componente hijo
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>Precio mínimo</label>
                <input 
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>€{minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select onChange={handleChangeCategory} id={categoryFilterId} >
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Móviles</option>
                    
                </select>
            </div>
        </section>
    )
}