const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')
const path = require('path')

module.exports = function override(config, env) {
  // eslint-disable-next-line no-param-reassign
  config = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}/`),
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    '@screens': path.resolve(__dirname, `${paths.appSrc}/screens/`),
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@style-guide': path.resolve(__dirname, `${paths.appSrc}/style-guide/`),
  })(config, env)
  return config
}
