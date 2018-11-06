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
  }
}
