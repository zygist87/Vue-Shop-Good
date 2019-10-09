<template>
  <div class="product-view">
    <div
      v-if="isRequesting"
      class="product-view__loading"
    >
      Loading...
    </div>
    <div
      v-else
      class="product-view__products"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="product-view__product"
      >
        <ProductBox
          :product="product"
          :count="quantity[product.id]"
          @favorite="updateFavorite"
          @addToCart="addToCart"
          @plus="increaseCount"
          @minus="decreaseCount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from '@/components/ProductBox'
import { FETCH_DATA } from '@/store/modules/Products/action-types'
import { ADD_TO_CART, INCREASE_COUNT, DECREASE_COUNT } from '@/store/modules/Cart/action-types'
import { REQUESTING } from '@/store/modules/Products/status-types'
import { UPDATE_FAVORITE } from '@/store/modules/Products/mutation-types'
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
	components: {
		ProductBox
	},
	computed: {
		...mapGetters('Products', {
			status: 'status',
			products: 'products'
		}),
		...mapGetters('Cart', {
			quantity: 'quantity'
		}),
		isRequesting () {
			return this.status === REQUESTING
		}
	},
	created () {
		this.fetchProducts()
	},
	methods: {
		...mapActions('Products', {
			fetchProducts: FETCH_DATA
		}),
		...mapActions('Cart', {
			addToCart: ADD_TO_CART,
			increaseCount: INCREASE_COUNT,
			decreaseCount: DECREASE_COUNT
		}),
		...mapMutations('Products', {
			updateFavorite: UPDATE_FAVORITE
		})
	}
}
</script>

<style lang='scss'>
	.product-view {
		display: flex;
		width: 100%;

		&__loading {
			display: flex;
			justify-content: center;
			width: 100%;
		}

		&__products {
			display: flex;
			flex-wrap: wrap;
			margin: 0 -15px;
			width: 100%;
		}

		&__product {
			display: flex;
			flex-flow: column;
			flex: 0 0 100%;
			min-width: 100%;
			margin-bottom: 30px;
			padding: 0 15px;

			@media (min-width: 576px) {
				flex: 0 0 50%;
				min-width: 50%;
			}

			@media (min-width: 768px) {
				flex: 0 0 33%;
				min-width: 33%;
			}

			@media (min-width: 1200px) {
				flex: 0 0 25%;
				min-width: 25%;
			}

			.product-box {
				display: flex;
				flex-flow: column;
				flex: 1;
			}
		}
	}
</style>
