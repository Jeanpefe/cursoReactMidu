
export const initialState = []

export const CART_ACTIONS_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
	const {type: actionType, payload: actionPayload} = action
	switch (actionType) {
		case CART_ACTIONS_TYPES.ADD_TO_CART: 
			const productInCartIndex = state.findIndex(item => item.id === actionPayload.id)
			if (productInCartIndex >= 0) {
				//Structured clone
				const newState = structuredClone(state)
				newState[productInCartIndex].quantity += 1
				return newState
			}
			return [
				...state,
				{
					...actionPayload, //product
					quantity: 1	
				}
			]
		case CART_ACTIONS_TYPES.REMOVE_FROM_CART:
			const {id} = actionPayload
			return state.filter(item => item.id !== id)
		case CART_ACTIONS_TYPES.CLEAR_CART: {
			return initialState
		}
	}
	return state
}