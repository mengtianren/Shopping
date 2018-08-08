// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import {routes} from './routers/index'

import App from './App'
import store from './store'
import '../static/js/rem'
import '../static/css/public.less'

import api from './ajax/index'
import VueCookies from 'vue-cookies'
import { Loading, Group, Box, XButton, XInput, AlertPlugin } from 'vux'
import TemLoading from './template/loading/index'
Vue.component('loading', Loading)
Vue.use(VueCookies)
Vue.component('group', Group)
Vue.component('box', Box)
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)
Vue.use(AlertPlugin)

Vue.component('TemLoading', TemLoading)
// Vue.directive('transfer-dom', TransferDom)

// 或者umd方式
// 引入构建的js文件
// Vue.use(vuxLoadingPlugin)
Vue.prototype.$axios = api
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.querySelector('title').innerText = to.meta.title

  store.commit('SetLoading', true)
  if (to.meta.user) {
    if (VueCookies.get('session')) {
      next()
    } else {
      next({name: 'login'})
    }
  } else {
    next()
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  store.commit('SetTitle', to.meta.title)
  store.commit('SetLoading', false)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  created () {},
  mounted () {}
}).$mount('#app-box')
