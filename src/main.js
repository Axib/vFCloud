// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './router/httpConfig/http'
import cookie from './router/httpConfig/cookie'
import loading from './components/loading'
import {store} from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$cookie = cookie

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.component('loading', loading)

/* 取消字段选择功能 */
document.onselectstart = function () { return false }
