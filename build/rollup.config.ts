import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import { resolve } from 'path'

export default [
  {
    input: resolve(__dirname, '../src/index.ts'),
    output: {
      file: resolve(__dirname, '../dist/index.esm.js'),
      format: 'esm'
    },
    plugins: [
      typescript(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        exclude: 'node_modules/**'
      })
    ]
  }
]
