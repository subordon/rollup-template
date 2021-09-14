import path from 'path'
import typescript from '@rollup/plugin-typescript'

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

export default [
  {
    input: resolveFile('src/index.ts'),
    output: [
      {
        file: resolveFile('dist/index.esm.js'),
        format: 'esm'
      },
      {
        file: resolveFile('dist/index.cjs.js'),
        format: 'cjs',
        exports: 'named'
      }
    ],
    plugins: [typescript()]
  }
]
