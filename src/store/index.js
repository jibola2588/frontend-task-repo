import { createStore } from 'vuex'

export default createStore({
  state: {
    token: '',
  },
  getters: {
  },
  mutations: {
    SET_TOKEN(state, data) {
      state.token = data
  },
  },
  actions: {
  },
  modules: {
  }
})
