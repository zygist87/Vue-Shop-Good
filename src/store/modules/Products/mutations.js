import { UPDATE_STATUS, SET_PRODUCTS, UPDATE_FAVORITE } from './mutation-types'

export default {
	[UPDATE_STATUS] (state, status) {
		state.status = status
	},

	[SET_PRODUCTS] (state, products) {
		state.products = products.map((product, index) => {
			product.id = index + 1
			product.image = `${product.image}?c=${index + 1}`
			return product
		})
	},

	[UPDATE_FAVORITE] (state, product) {
		if (!state.favorites.includes(product.id)) {
			state.favorites.push(product.id)
		} else {
			state.favorites = state.favorites.filter(favorite => favorite !== product.id)
		}
		localStorage.setItem('favorites', JSON.stringify(state.favorites))
	}
}
