const state = {
  type: 1
}

const mutations = {
  SET_TYPE (state, payload) {
    state.type = payload
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
