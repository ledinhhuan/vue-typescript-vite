module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		parser: '@typescript-eslint/parser'
	},
	extends: [
		// 'plugin:vue/base',
		// 'plugin:vue/vue3-essential',
		// 'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended',
		// 'airbnb-base',
		// '@vue/eslint-config-typescript/recommended',
		// '@vue/eslint-config-prettier',
		// 'plugin:prettier/recommended',
		// 'plugin:@typescript-eslint/eslint-recommended'
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'airbnb-base',
		'plugin:prettier/recommended'
	],
	parser: 'vue-eslint-parser',
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	rules: {
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'import/no-absolute-path': 'off',
		'import/no-extraneous-dependencies': 'off',
		'vue/no-multiple-template-root': 'off',
		'no-param-reassign': [
			'error',
			{
				props: true
			}
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	},
	globals: {
		defineProps: 'readonly'
	}
};
