const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	root: true,
	extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'standard-with-typescript'],
	plugins: ['@typescript-eslint', 'prettier', 'import', 'unused-imports'],
	env: {
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'prettier/prettier': 'warn',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
			},
		],
		camelcase: 'warn',
		'no-tabs': 'off',
		indent: [
			'warn',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'@typescript-eslint/indent': ['warn', 'tab'],
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/space-before-function-paren': 'off',
	},
	overrides: [
		{
			files: ['.eslintrc.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
})
