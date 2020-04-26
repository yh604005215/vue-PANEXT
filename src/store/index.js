import Vue from 'vue'
import Vuex from 'vuex'
import moduelA from './moduels/moduelA'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduelA
  }
})
