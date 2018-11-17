export default {
  checkAllKBMembers (state) {
    state.isAllKBMembersChecked = !state.isAllKBMembersChecked
    state.users.forEach(user => {
      if (user.status === 'KB') {
        user.present = state.isAllKBMembersChecked
      }
    })
  },
  checkAllSeniorMembers (state) {
    state.isAllSeniorMembersChecked = !state.isAllSeniorMembersChecked
    state.users.forEach(user => {
      if (user.status === 'senior') {
        user.present = state.isAllSeniorMembersChecked
      }
    })
  },
  addNewProgram (state, payload) {
    // TODO id...
    // payload.id = state.programs.length

    state.programs.push(payload)
  },
  updateProgram (state, payload) {
    state.programs[payload.id] = payload
  },
  deleteProgram (state, payload) {
    state.programs.forEach(element => {
      if (element.id === payload) {
        state.programs.splice(element.id, 1)
      }
    })
  },
  setUser (state, payload) {
    state.user = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state) {
    state.error = null
  },
  setLoadedPrograms (state, payload) {
    state.programs = payload
  }
}
