import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        // setCart([...cart, product]) // Forma sencilla
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        // Comprobamos si el producto ya está
        if (productInCartIndex >= 0) {
            //Structured clone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}