import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/components/indexView'
import loginView from '@/components/loginView'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
