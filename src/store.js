import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

Vue.prototype.$store = new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    showLoading (state) {
      state.isLoading = true
    },
    hideLoading (state) {
      state.isLoading = false
    }
  }
})
