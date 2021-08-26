
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(Vuelidate)

Vue.prototype.$dateEST = (date) => {
  const d = date ? new Date(date) : new Date()
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000)
  return new Date(utc + (3600000 * -4)) // setting at DST timezone
 }

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
