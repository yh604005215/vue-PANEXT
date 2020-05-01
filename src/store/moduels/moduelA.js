const state = {
  type: 1,
  content: '',
  isLogin: true,
  token: null
}

const mutations = {
  SET_TYPE (state, payload) {
    state.type = payload
  },
  SET_CONTENT (state, payload) {
    state.content = payload
  },
  SET_TOKEN (state, payload) {
    state.token = payload
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
