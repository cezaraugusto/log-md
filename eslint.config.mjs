import ts from 'eslint-config-auditor/ts'
import stylistic from 'eslint-config-auditor/stylistic'
import vitest from 'eslint-config-auditor/vitest'

export default [
  {ignores: ['dist/**', 'coverage/**', '**/*.json']},
  ...ts,
  ...stylistic,
  ...vitest.map((c) => ({
    ...c,
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}']
  }))
]
