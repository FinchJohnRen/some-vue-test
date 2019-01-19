// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import IconSvg from './components/Icon'

Vue.component('icon-svg', IconSvg)

Vue.config.productionTip = false

/* eslint-disable no-new */
  new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
