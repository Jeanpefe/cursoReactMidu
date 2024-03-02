import {products as initalProducts} from './mocks/products.json'
import { Products } from "./components/Products"
import { useState } from 'react'
import { Header } from './components/Header'
import { Filters } from './components/Filters'

function App() {
  const [products] = useState(initalProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return (
    <>
      <Header >
        <Filters changeFilters={setFilters}/>
      </Header>
      <Products products={filterProducts(products)}/>
    </>
  )
}

export default App
