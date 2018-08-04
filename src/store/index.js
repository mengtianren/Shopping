import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  action: {},
  mutations: {},
  modules: {
    app
  }
})

export default store
