import Vue from 'vue'
import Vuex from 'vuex'
import layoutModule from './modules/layout'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'layout': layoutModule
  }
})
