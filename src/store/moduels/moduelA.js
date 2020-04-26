const state = {
  type: 1,
  content: ''
}

const mutations = {
  SET_TYPE (state, payload) {
    state.type = payload
  },
  SET_CONTENT (state, payload) {
    state.content = payload
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
