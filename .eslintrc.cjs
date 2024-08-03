/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		},
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: ['eslint:recommended'],
	overrides: [
		{
			files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
			plugins: ['react', 'react-hooks', 'jsx-a11y', '@stylistic', 'simple-import-sort'],
			extends: [
				'plugin:react/recommended',
				'plugin:react/jsx-runtime',
				'plugin:react-hooks/recommended',
				'plugin:jsx-a11y/recommended',
				'plugin:prettier/recommended'
			],
			settings: {
				react: {
					version: 'detect'
				},
				formComponents: ['Form'],
				linkComponents: [
					{ name: 'Link', linkAttribute: 'to' },
					{ name: 'NavLink', linkAttribute: 'to' }
				],
				'import/resolver': {
					typescript: {}
				}
			},
			rules: {
				'simple-import-sort/imports': 'warn',
				'simple-import-sort/exports': 'warn',
				'react/self-closing-comp': [
					'warn',
					{
						component: true,
						html: true
					}
				],
				'react-hooks/rules-of-hooks': 'error',
				'react-hooks/exhaustive-deps': 'warn',
				'react/react-in-jsx-scope': 'off',
				'@stylistic/quotes': ['warn', 'single']
			}
		},
		{
			files: ['**/*.{ts,tsx}'],
			plugins: ['@typescript-eslint', 'import'],
			parser: '@typescript-eslint/parser',
			settings: {
				'import/internal-regex': '^~/',
				'import/resolver': {
					node: {
						extensions: ['.ts', '.tsx']
					},
					typescript: {
						alwaysTryTypes: true
					}
				}
			},
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:import/recommended',
				'plugin:import/typescript'
			],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						vars: 'all',
						args: 'after-used',
						argsIgnorePattern: '^_'
					}
				],
				'@typescript-eslint/no-empty-function': 'warn',
				'@typescript-eslint/no-empty-interface': 'warn',
				'@typescript-eslint/consistent-type-imports': [
					'warn',
					{
						fixStyle: 'inline-type-imports'
					}
				]
			}
		},
		{
			files: ['.eslintrc.cjs'],
			env: {
				node: true
			}
		}
	]
}
