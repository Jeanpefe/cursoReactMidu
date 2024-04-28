import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons";
import { useId } from "react";
import './Cart.css'
import { useCart } from "../hooks/useCart";

export function Cart () {
    const cartCheckboxId = useId()
	const {cart, addToCart, clearCart} = useCart()

	function CartItem({price, title, addToCart, quantity}) {
		return (
		<li>
			<img 
				src="https://i.pinimg.com/474x/c4/86/5b/c4865b31956c0571ac923bdce5934419.jpg"
				alt={title}
			/>

			<div>
				<strong>{title}</strong> - €{price}
			</div>

			<footer>
				<small>
					Cantidad: {quantity}
				</small>
				<button onClick={addToCart}>+</button>
			</footer>
		  </li>
		)	
	}

    return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden/>

        <aside className='cart'>
          <ul>
			{cart.map(product => (
				<CartItem 
				key={product.id} 
				{...product}
				addToCart={() => addToCart(product)}
				/>
			))}
          </ul>

            <button onClick={() => clearCart()}>
                <ClearCartIcon />
            </button>
        </aside>
    </>
    )
}
