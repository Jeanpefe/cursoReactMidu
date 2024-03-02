import { useState } from 'react'
import './Filters.css'

export function Filters ({changeFilters}) {
    const [minPrice, setMinPrice] = useState(0)
    const [category, setCategory] = useState('all')

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        //estamos pasando la funcion de actualizar estado nativa de React a un componente hijo
        setCategory(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor="price">Precio mínimo</label>
                <input 
                    type='range'
                    id='price'
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>€{minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select onChange={handleChangeCategory} id='category' >
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Móviles</option>
                    
                </select>
            </div>
        </section>
    )
}