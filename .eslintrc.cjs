module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react-refresh', 'react', '@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				tabWidth: 2,
				singleQuote: true,
				maxLen: 80,
			}
		],
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'max-len': ['warn', { code: 80 }],
    'no-trailing-spaces': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-spacing': [
      'warn',
      'never',
      {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    'react/react-in-jsx-scope': ['off'],
	},
};
