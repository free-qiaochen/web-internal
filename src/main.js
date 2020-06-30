import Vue from 'vue'
import App from './App.vue'
// import store from './store'

import global from './config/index'
import i18n from './utils/i18n'
import './utils/uiComponent'


import { getDeviceType } from "./utils/index";

global.deviceType = getDeviceType()
Vue.prototype.$deviceType = global.deviceType



Vue.config.productionTip = false

new Vue({
  // store,
  i18n,
  render: h => h(App)
}).$mount('#app')
