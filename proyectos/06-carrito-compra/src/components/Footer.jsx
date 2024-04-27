import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer () {
	const {filters} = useFilters()
	const { cart } = useCart()
	console.log(cart)
    return (
        <footer className='footer'>
            {
                JSON.stringify(cart, null, 2)
            }
            {/* <h5>Carrito de Compra con useContext y useReducer</h5> */}
        </footer>
    )
}