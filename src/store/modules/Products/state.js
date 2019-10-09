export default () => ({
	status: null,
	products: [],
	favorites: JSON.parse(localStorage.getItem('favorites')) || []
})
