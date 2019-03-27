module.exports = {
  ignore: ['node_modules/**'],
  babelrcRoots: ['.', 'packages/*'],
  presets: [['@babel/preset-env'], ['@babel/preset-react']],
  plugins: [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-proposal-export-default-from']
  ]
}
