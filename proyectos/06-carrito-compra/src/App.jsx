import {products as initalProducts} from './mocks/products.json'
import { Products } from "./components/Products"
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'

function App() {
  const [products] = useState(initalProducts)
  const {filterProducts, setFilters} = useFilters()

  return (
    <>
		<Header />
		<Cart />
		<Products products={filterProducts(products)}/>
		<Footer />
    </>
  )
}

export default App
