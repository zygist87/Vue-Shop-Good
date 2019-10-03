module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/base',
		'plugin:vue/essential',
		'plugin:vue/strongly-recommended',
		'plugin:vue/recommended',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'vue/array-bracket-spacing': 'error',
		'vue/comma-dangle': ['error', 'never'],
		'vue/block-spacing': ['error', 'always'],
		'vue/object-curly-spacing': ['error', 'always'],
		'space-before-function-paren': ['error', 'always'],
		'block-spacing': ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'keyword-spacing': ['error', { before: true }],
		'space-before-blocks': ['error'],
		'object-curly-spacing': ['error', 'always'],
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'func-call-spacing': ['error', 'never']
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
