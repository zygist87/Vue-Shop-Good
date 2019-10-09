<template>
  <footer class="app-footer">
    © {{ new Date().getFullYear() }} Foodshop.lt
  </footer>
</template>
<script>
export default {
	name: 'AppFooter'
}
</script>

<style lang="scss">
	.app-footer {
		padding: 30px 0;
		width: 100%;
		text-align: center;
		font-size: 12px;
		color: rgba(black, 0.87);
	}
</style>
