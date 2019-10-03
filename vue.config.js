module.exports = {
	pluginOptions: {
		lintStyleOnBuild: false,
		stylelint: {}
	},
	css: {
		loaderOptions: {
			sass: {
				includePaths: ['node_modules', 'src/assets/scss'],
				data: `@import 'global';`
			}
		}
	}
}
