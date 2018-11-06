export default {
  isAllKBMembersChecked (state) {
    return state.isAllKBMembersChecked
  },
  isAllSeniorMembersChecked (state) {
    return state.isAllSeniorMembersChecked
  },
  KBMembers (state) {
    return state.users.filter(user => {
      return user.status === 'KB'
    })
  },
  seniorMembers (state) {
    return state.users.filter(user => {
      return user.status === 'senior'
    })
  }
}
