import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { Plugin } from '@nuxt/types'

Vue.use(VueI18n)

const plugin: Plugin = ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: require('../locales/en.yml'),
      fr: require('../locales/fr.yml'),
    },
  })
}

export default plugin
