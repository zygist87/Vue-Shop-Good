<template>
  <div class="product-box">
    <div class="product-box__favorite">
      <HeartIcon
        :active="product.isFavored"
        @click="$emit('favorite', product)"
      />
    </div>
    <div
      :class="['product-box__image', {
        'product-box__image--loading': !isLoaded
      }]"
    >
      <img
        :src="product.image"
        :alt="product.name"
      >
    </div>

    <div
      class="product-box__content"
    >
      <h4 class="product-box__title">
        {{ product.name }}
      </h4>

      <h4 class="product-box__description">
        {{ product.description }}
      </h4>

      <h2 class="product-box__price-text">
        {{ product.price | currency }}
      </h2>
    </div>

    <div class="product-box__button">
      <BaseButton
        v-if="!count"
        @click="$emit('addToCart', product)"
      >
        Add to cart
      </BaseButton>
      <div v-else>
        <button @click="$emit('minus', product)">
          -
        </button>
        <input
          :value="count"
          readonly
        >
        <button @click="$emit('plus', product)">
          +
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import HeartIcon from '@/components/HeartIcon'
import BaseButton from '@/components/BaseButton'
export default {
	name: 'ProductBox',
	components: {
		HeartIcon,
		BaseButton
	},
	props: {
		product: {
			type: Object,
			required: true,
			default: () => ({
				image: null,
				name: null,
				description: null,
				price: null
			})
		},
		count: {
			type: Number,
			default: 0
		}
	},
	data: () => ({
		isLoaded: false
	}),
	async created () {
		await this.loadImage(this.product.image)
		this.isLoaded = true
	},
	methods: {
		loadImage (src) {
			return new Promise(resolve => {
				const img = new Image()
				img.src = src
				img.onload = resolve
			})
		}
	}
}
</script>
<style lang="scss">
	.product-box {
		position: relative;
		background-color: white;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		overflow: hidden;
		animation: ProductFadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);

		&__favorite {
			z-index: 1;
			position: absolute;
			top: 10px;
			left: 10px;
		}

		&__image {
			border-bottom: 1px solid whitesmoke;
			margin-bottom: 15px;
			min-width: 262.5px;
			min-height: 262.5px;
			transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
			opacity: 1;
			filter: blur(0);

			img {
				width: 100%;
				vertical-align: top;
				user-select: none;
			}

			&--loading {
				opacity: 0;
				filter: blur(8px);
			}
		}

		&__content {
			display: flex;
			flex-flow: column;
			flex: 1;
			padding: 0 15px;
		}

		&__title {
			font-size: 16px;
			line-height: 1;
			margin: 0;
			margin-bottom: 15px;
			flex: 1;

			&:first-letter {
				text-transform: uppercase;
			}
		}

		&__price-text {
			margin: 0;
			font-size: 18px;
			padding: 15px 0;
		}

		&__description {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			color: rgba(black, 0.51);
			font-size: 14px;
			line-height: 1;
			font-weight: normal;
			margin: 0;
			height: 45px;
			line-height: 1.1;
		}

		&__button {
			margin: 15px 0;
			padding: 0 15px;

			&-icon {
				margin-right: 7.5px;
			}

			&-transition {
				&--entering {
					transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
						transform 0.15s cubic-bezier(0, 0, 0.2, 1);
					will-change: transform, opacity;
				}

				&--exiting {
					transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
						transform 0.15s cubic-bezier(0.4, 0, 1, 1);
					will-change: transform, opacity;
				}

				&--enter-start,
				&--exit-end {
					opacity: 0;
					transform: scale(0);
				}

				&--enter-end,
				&--exit-start {
					opacity: 1;
					transform: scale(1);
				}
			}
		}
	}

	@keyframes ProductFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
