import Vue from 'vue'
import App from './App'
import { createStore } from '@/packages/vuex'
import { createRouter } from '@/packages/vue-router'

export function createApp () {
	const store = createStore()
	const router = createRouter()
	const app = new Vue({
		store,
		router,
		render: h => h(App)
	})

	return {
		store,
		router,
		app
	}
}
