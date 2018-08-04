// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

import App from './App'
import store from './store'
import '../static/js/rem'
import '../static/css/public.less'
Vue.use(VueRouter)

const super1 = {
  path: 'super',
  meta: {title: '关于'},
  component: () => import('./components/Super'),
  children: [
    {
      path: 'market',
      meta: { title: '超市1' },
      component: () => import('./components/Super/Market'),
      redirect: '/super/market/clothes',
      children: [
        {path: 'clothes', meta: {title: '洗护喂养'}, component: () => import('./components/Super/Clothes')}
      ]
    }
  ]
}



const routes = [
  {
    path: '/',
    meta: {title: '首页'},
    component: () => import('./components/Index'),
    redirect: '/home',
    children: [
      {path: 'home', meta: {title: '首页'}, component: () => import('./components/Home')},
      super1,
      {path: 'user', meta: {title: '个人中心'}, component: () => import('./components/User')}
    ]
  }, {
    path: '/details/:id',
    name: 'details',
    meta: {title: '商品详情'},
    component: () => import('./components/Details')
  },
  {
    path: '/news/:id',
    name: 'news',
    meta: {title: '新闻详情'},
    component: () => import('./components/News')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.querySelector('title').innerText = to.meta.title
  console.log(to)
  store.commit('SetTitle', to.meta.title)
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
