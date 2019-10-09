<template>
  <div class="app-header">
    <header class="app-header__container container">
      <div class="app-header__logo">
        <h3>
          FoodShop.lt
        </h3>
      </div>
      <div class="app-header__icons">
        <!-- TODO -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
	name: 'AppHeader'
}
</script>
<style lang="scss">
	.app-header {
		z-index: 2;
		display: flex;
		align-items: center;
		height: 64px;
		background-color: white;
		box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
		position: sticky;
		top: 0;
		width: 100%;
		margin-bottom: 30px;

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__logo {
			h3 {
				cursor: pointer;
			}
		}

		&__icons {
			display: flex;
			margin: 0 -7.5px;
		}
	}
</style>
