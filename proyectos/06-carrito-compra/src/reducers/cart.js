
export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
	window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
	const {type: actionType, payload: actionPayload} = action
	let newState

	switch (actionType) {
		case CART_ACTIONS_TYPES.ADD_TO_CART: 
			const productInCartIndex = state.findIndex(item => item.id === actionPayload.id)
			if (productInCartIndex >= 0) {
				//Structured clone
				newState = structuredClone(state)
				newState[productInCartIndex].quantity += 1
				return newState
			}

			newState = [
				...state,
				{
					...actionPayload, //product
					quantity: 1	
				}
			]
			updateLocalStorage(newState)
			return newState

		case CART_ACTIONS_TYPES.REMOVE_FROM_CART:
			const {id} = actionPayload
			newState = state.filter(item => item.id !== id)
			return newState

		case CART_ACTIONS_TYPES.CLEAR_CART: {
			updateLocalStorage(initialState)
			return initialState
		}
	}
	return state
}