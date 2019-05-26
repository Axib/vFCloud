import Vue from 'vue'
import Router from 'vue-router'
import net from '@/constants/http.constant'
import indexView from '@/components/indexView'
import loginView from '@/components/loginView'
import homeView from '@/components/homeView'
import vuescroll from 'vuescroll/dist/vuescroll-native.min'
import 'vuescroll/dist/vuescroll.css'

Vue.use(vuescroll)

Vue.use(Router)
Vue.prototype.NET = net

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexView',
      component: indexView
    },
    {
      path: '/login',
      name: 'loginView',
      component: loginView
    },
    {
      path: '/homeView',
      name: 'homeView',
      component: homeView
    }
  ]
})
