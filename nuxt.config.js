const StylelintPlugin = require('stylelint-webpack-plugin')

const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}

const isSASSRule = (rule) => {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}

const sassResourcesLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: [__dirname],
    data: '@import "assets/style/misc/mixins.scss"; ' +
      '@import "assets/style/misc/variables.scss"; ' +
      '@import "assets/style/misc/fonts.scss";'
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'My Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })

        // TODO: Проверка стилей при сборке
        /*config.plugins.push(new StylelintPlugin({
          files: [
            '**!/!*.vue',
            '**!/!*.scss',
          ],
        }))*/
      }

      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (isSASSRule(rule)) {
          rule.use.push(sassResourcesLoader)
        }
      })
    },
  },

  css: [
    'normalize.css/normalize.css',
  ],
}
