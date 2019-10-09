<template>
  <button
    class="base-button"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
	name: 'BaseButton'
}
</script>
<style lang="scss">
	.base-button {
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		-webkit-appearance: none;
		border: 0;
		background-color: hsl(152, 56%, 50%);
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 13px;
		padding: 2.5px 15px;
		border-radius: 5px;
		height: 40px;
		box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
		opacity: 1;
		transition: opacity 0.2s ease;
		outline: 0;
		width: 100%;

		&:hover {
			cursor: pointer;
			opacity: 0.8;
		}

		&:focus {
			opacity: 0.7;
		}

		&:active {
			opacity: 0.5;
		}
	}
</style>
