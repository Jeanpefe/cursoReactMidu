import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
		console.log("añadimos")
        // setCart([...cart, product]) // Forma sencilla
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
		console.log(productInCartIndex)
        // Comprobamos si el producto ya está
        if (productInCartIndex >= 0) {
            //Structured clone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
        }
		setCart(prevState => ([
			...prevState,
			{
				...product,
				quantity: 1
			}
		]))
    }

	const removeFromCart = product => {
		setCart(prevState => prevState.filter(item => item.id !== product.id))
	}

    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
			removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}