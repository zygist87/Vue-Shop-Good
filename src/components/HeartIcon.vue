<template>
  <div
    :class="['heart-icon', { 'heart-icon--active': active }]"
    @click="$emit('click', $event)"
  >
    {{ active ? '💖' : '♡️' }}
    <!-- <FontAwesomeIcon :icon="icon" /> -->
  </div>
</template>
<script>
export default {
	name: 'HeartIcon',
	props: {
		active: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style lang="scss">
	.heart-icon {
		background-color: white;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
		padding: 2px;
		border-radius: 100%;
		height: 36px;
		width: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
		transform: scale(1);

		&:hover {
			cursor: pointer;
			color: hsl(348, 100%, 61%);
		}

		&:active {
			transform: scale(1.5);
			box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
		}

		&--active {
			color: hsl(348, 100%, 61%);
		}
	}
</style>
