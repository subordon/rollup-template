import babel from '@rollup/plugin-babel'
import esbuild from 'rollup-plugin-esbuild'
import { resolve } from 'path'

export default [
  {
    input: resolve(__dirname, '../src/index.ts'),
    output: [
      {
        file: resolve(__dirname, '../dist/index.esm.js'),
        format: 'esm'
      },
      {
        file: resolve(__dirname, '../dist/index.cjs.js'),
        format: 'cjs'
      }
    ],
    plugins: [
      esbuild({
        // All options are optional
        include: /\.ts?$/, // default, inferred from `loaders` option
        exclude: /node_modules/, // default
        sourceMap: true, // default
        minify: process.env.NODE_ENV === 'production',
        target: 'esnext', // default, or 'es20XX', 'esnext'
        // Like @rollup/plugin-replace
        define: {
          'process.env.NODE_ENVs': '"x.y.z"'
        },
        tsconfig: 'tsconfig.json' // default
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.ts'],
        exclude: 'node_modules/**'
      })
    ]
  }
]
