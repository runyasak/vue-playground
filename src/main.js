import Vue from 'vue'
import App from './App.vue'
import router from './router'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'codemirror/mode/vue/vue'

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
