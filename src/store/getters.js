export default {
  isAllKBMembersChecked (state) {
    return state.isAllKBMembersChecked
  },
  isAllSeniorMembersChecked (state) {
    return state.isAllSeniorMembersChecked
  },
  kbMembers (state) {
    return state.users.filter(user => {
      return user.status === 'KB'
    })
  },
  seniorMembers (state) {
    return state.users.filter(user => {
      return user.status === 'senior'
    })
  },
  programs (state) {
    return state.programs
  },
  // program (state) {
  //   return state.programs.find(program => {
  //     return program.id === programId
  //   })
  // },
  program (state) {
    return (programId) => {
      return state.programs.find((program) => {
        return program.id === programId
      })
    }
  },
  user (state) {
    return state.user
  },
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  }
}
