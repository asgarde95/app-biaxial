// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // options...
  outputDir : 'httpdocs',

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
})
