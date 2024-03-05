import {products as initalProducts} from './mocks/products.json'
import { Products } from "./components/Products"
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'

function App() {
  const [products] = useState(initalProducts)
  const {filters, filterProducts, setFilters} = useFilters()

  return (
    <>
      <Header />
      <Products products={filterProducts(products)}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App
