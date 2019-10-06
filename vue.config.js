const marked = require('marked')

const renderer = new marked.Renderer()

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .options({ pedentic: true, renderer })
      .end()
  }
}
