import firebase from 'firebase'

export default {
  addNewProgram ({ commit }, payload) {
    if (payload.startText !== undefined && payload.startText.length !== 0) {
      payload.procent += 20
    } if (payload.startCost !== undefined && payload.startCost > 0) {
      payload.procent += 10
    }
    if (payload.progressText !== undefined && payload.progressText.length !== 0) {
      payload.procent += 20
    } if (payload.progressCost !== undefined && payload.progressCost > 0) {
      payload.procent += 10
    }
    if (payload.closeText !== undefined && payload.closeText.length !== 0) {
      payload.procent += 20
    }
    if (payload.closeCost !== undefined && payload.closeCost > 0) {
      payload.procent += 10
    }

    const program = {
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
    firebase.database().ref('programs').push(program)
      .then((data) => {
        const key = data.key
        commit('addNewProgram', {
          ...program,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  signUserUp ({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid
        }
        commit('setUser', newUser)
      }
    ).catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
  },
  signUserIn ({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  clearError ({ commit }) {
    commit('clearError')
  },
  loadPrograms ({ commit }) {
    commit('setLoading', true)
    firebase.database().ref('programs').once('value')
      .then(data => {
        const programs = []
        const obj = data.val()
        for (let key in obj) {
          programs.push({
            id: key,
            title: obj[key].title,
            owner: obj[key].owner,
            name: obj[key].name,
            date: obj[key].date,
            procent: obj[key].procent,
            startText: obj[key].startText,
            startCost: obj[key].startCost,
            progressText: obj[key].progressText,
            progressCost: obj[key].progressCost,
            closeText: obj[key].closeText,
            closeCost: obj[key].closeCost
          })
        }
        commit('setLoadedPrograms', programs)
        commit('setLoading', false)
      })
      .catch(
        error => {
          console.log(error)
          commit('setLoading', false)
        }
      )
  },
  deleteProgram ({ commit }, payload) {
    firebase.database().ref('programs/' + payload).remove()
    commit('deleteProgram', payload)
  },
  editProgram ({ commit }, payload) {
    payload.procent = 0
    if (payload.startText !== undefined && payload.startText.length !== 0) {
      payload.procent += 20
    } if (payload.startCost !== undefined && payload.startCost > 0) {
      payload.procent += 10
    }
    if (payload.progressText !== undefined && payload.progressText.length !== 0) {
      payload.procent += 20
    } if (payload.progressCost !== undefined && payload.progressCost > 0) {
      payload.procent += 10
    }
    if (payload.closeText !== undefined && payload.closeText.length !== 0) {
      payload.procent += 20
    }
    if (payload.closeCost !== undefined && payload.closeCost > 0) {
      payload.procent += 10
    }
    firebase.database().ref('programs/' + payload.id).set({
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
    })
    commit('editProgram', payload)
  }
}
