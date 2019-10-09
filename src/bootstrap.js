import Vue from 'vue'
import '@/assets/scss/app.scss'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.filter('currency', value => {
	return new Intl.NumberFormat('lt-LT', {
		style: 'currency',
		currency: 'EUR'
	}).format(value)
})
