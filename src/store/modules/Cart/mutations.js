import { SET_CART_ITEMS, SET_CART_ITEM, SET_QUANTITY } from './mutation-types'

export default {
	[SET_CART_ITEM] (state, product) {
		state.items = [...state.items, product]
		sessionStorage.setItem('cart', JSON.stringify(state.items))
	},
	[SET_CART_ITEMS] (state, products) {
		state.items = products
		sessionStorage.setItem('cart', JSON.stringify(state.items))
	},
	[SET_QUANTITY] (state, quantity) {
		state.quantity = quantity
		sessionStorage.setItem('quantity', JSON.stringify(state.quantity))
	}
}
