import ts from 'eslint-config-auditor/ts'

export default [
  {ignores: ['dist/**', 'coverage/**', '**/*.json']},
  ...ts
]
