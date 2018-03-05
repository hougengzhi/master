// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Bootstrap from './assets/css/bootstrap.css'
import Material from './assets/css/material-design-iconic-font.min.css'
import FontAwesome from './assets/css/font-awesome.min.css'
import router from './router'

Vue.use(Bootstrap)
Vue.use(Material)
Vue.use(FontAwesome)
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
