import 'normalize.css/normalize.css'

import './polyfill'
import './mixins'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// setup services
import './services'

Vue.config.productionTip = false

export default function bootstrap () {
  /* eslint-disable no-new */
  new Vue({
    el: '[app]',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
}
