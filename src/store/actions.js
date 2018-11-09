export default {
  addNewProgram ({commit}, payload) {
    const program = {
      id: payload.id,
      owner: payload.owner,
      name: payload.name,
      date: payload.date,
      procent: payload.procent,
      startText: payload.startText,
      startCost: payload.startCost,
      progressText: payload.progressText,
      progressCost: payload.progressCost,
      closeText: payload.closeText,
      closeCost: payload.closeCost
    }
    commit('addNewProgram', program)
  }
}
