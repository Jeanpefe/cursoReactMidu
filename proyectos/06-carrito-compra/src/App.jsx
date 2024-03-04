import {products as initalProducts} from './mocks/products.json'
import { Products } from "./components/Products"
import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FiltersContext } from './context/filters'

function useFilters () {
  const {filters, setFilters} = useContext(FiltersContext)
  console.log({filters})
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return {filters, filterProducts, setFilters}
}
function App() {
  const [products] = useState(initalProducts)
  const {filters, filterProducts, setFilters} = useFilters()

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filterProducts(products)}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App
