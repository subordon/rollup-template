module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 避免转换成 CommonJS
        modules: false,
        // 使用 loose 模式，避免产生副作用
        loose: true,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not dead']
        }
      }
    ]
  ]
}
