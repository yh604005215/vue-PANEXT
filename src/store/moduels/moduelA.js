const state = {
  type: 1,
  content: '',
  isLogin: true
}

const mutations = {
  SET_TYPE (state, payload) {
    state.type = payload
  },
  SET_CONTENT (state, payload) {
    state.content = payload
  },
  SET_ISLOGIN (state, payload) {
    state.isLogin = payload
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
