export default () => ({
	items: JSON.parse(sessionStorage.getItem('cart')) || [],
	quantity: JSON.parse(sessionStorage.getItem('quantity')) || {}
})
