import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cookie:{}
  },
  mutations: {
    setuuid(state,id){
      state.cookie.uuid = id
    }
  },
  actions: {
    setuuid(context, data){
      context.commit('setuuid', data)
    }
  },
  modules: {
  }
})
