import { createStore } from 'vuex'

export default createStore({
  state: {
    nowPage: '/blog'
  },
  getters: {
  },
  mutations: {
    changePage(state, newPage) {
      state.nowPage = newPage
    }
  },
  actions: {
  },
  modules: {
  }
})
