export default {
	status: state => state.status,
	favorites: state => state.favorites,
	products: state => {
		return state.products.map(product => {
			product = { ...product }
			product.isFavored = state.favorites.includes(product.id)
			return product
		})
	}
}
