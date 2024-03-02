import './Filters.css'

export function Filters () {
    return (
        <section className="filters">

            <div>
                <label htmlFor="price">Precio</label>
                <input 
                    type='range'
                    id='price'
                    min='0'
                    max='1000'
                />
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id='category'>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Móviles</option>
                </select>
            </div>
        </section>
    )
}