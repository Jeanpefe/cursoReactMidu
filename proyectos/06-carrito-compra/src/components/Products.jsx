import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'
import { useCart } from '../hooks/useCart'

export function Products ({products}) {
	const { cart, addToCart, removeFromCart } = useCart()

	const checkProductInCart = product => {
		return cart.some(item => item.id === product.id)
	}
	
    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => { 
					const isProductInCart = checkProductInCart(product)
					return (
                    <li key={product.id}>
                        <img 
                            src='https://i.pinimg.com/474x/c4/86/5b/c4865b31956c0571ac923bdce5934419.jpg'
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong> - €{product.price}
                        </div>
                        <div>
                            <button onClick={() => {
								isProductInCart
								? removeFromCart(product)
								: addToCart(product)}}>
								{
									isProductInCart
									? <RemoveFromCartIcon/> 
									: <AddToCartIcon />  
								}
                            </button>
                        </div>
                    </li>
                )})}
            </ul>
        </main>
    )
}