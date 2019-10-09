import Products from './modules/Products'
import Cart from './modules/Cart'

export default {
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		Products,
		Cart
	},
	state: {},
	mutations: {},
	actions: {}
}
