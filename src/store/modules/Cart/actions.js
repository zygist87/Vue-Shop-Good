import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREASE_COUNT,
	DECREASE_COUNT
} from './action-types'
import { SET_CART_ITEMS, SET_CART_ITEM, SET_QUANTITY } from './mutation-types'

export default {
	[ADD_TO_CART]({ commit, state }, product) {
		const ID = product.id
		commit(SET_CART_ITEM, product)
		commit(SET_QUANTITY, {
			...state.quantity,
			[ID]: 1
		})
	},

	[REMOVE_FROM_CART]({ commit, state }, product) {
		const ID = product.id
		const items = state.items.filter(product => product.id !== ID)
		commit(SET_CART_ITEMS, items)
		delete state.quantity[ID]
		commit(SET_QUANTITY, { ...state.quantity })
	},

	[INCREASE_COUNT]({ commit, state }, product) {
		const ID = product.id
		if (state.quantity[ID]) {
			commit(SET_QUANTITY, {
				...state.quantity,
				[ID]: state.quantity[ID] + 1
			})
		}
	},

	[DECREASE_COUNT]({ commit, state, dispatch }, product) {
		const ID = product.id
		if (state.quantity[ID]) {
			if (state.quantity[ID] > 1) {
				commit(SET_QUANTITY, {
					...state.quantity,
					[ID]: state.quantity[ID] - 1
				})
			} else {
				dispatch(REMOVE_FROM_CART, product)
			}
		}
	}
}
