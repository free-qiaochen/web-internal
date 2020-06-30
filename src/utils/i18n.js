import Vue from 'vue'
import VueI18n from 'vue-i18n'
// element 语言库
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const lang_zh = require('../lang/zh')
const lang_en = require('../lang/en')

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': Object.assign(lang_zh, zhLocale),
    'en': Object.assign(lang_en, enLocale),
  }
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
