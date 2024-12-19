import antfu, { combine, imports, jsdoc } from '@antfu/eslint-config'

export default combine(
  imports({
    stylistic: {
      indent: 'tab',
      semi: true,
      quotes: 'double',
    },
  }),
  jsdoc({
    stylistic: {
      indent: 'tab',
      semi: true,
      quotes: 'double',
    },
  }),
  antfu({
    ignores: [
      '**/dist/*',
      '**/docs/*',
      '**/.github/*',
      '**/tsconfig.json',
      '**/README.md',
    ],
    rules: {
      'no-console': ['warn'],
      'antfu/no-top-level-await': ['off'],
      'require-await': ['error'],
      'no-unused-vars': ['error'],
      'dot-notation': ['off'],
      'jsdoc/check-param-names': ['error'],
      'jsdoc/require-property': ['error'],
      'jsdoc/require-returns-description': ['error'],
      'jsdoc/require-returns-check': ['error'],
      'unicorn/filename-case': ['error', {
        case: 'kebabCase',
        ignore: ['README.md'],
      }],
    },
  }),
)
