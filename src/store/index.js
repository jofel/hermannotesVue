/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable object-property-newline */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const imgURL = 'https://randomuser.me/api/portraits/'

export const store = new Vuex.Store({
  state: {
    isAllKBMembersChecked: false,
    isAllSeniorMembersChecked: false,
    users: [
      { name: 'Gubics Flórián', present: false, status: 'KB', img: imgURL, gender: 'men' },
      { name: 'Papp Márk', present: false, status: 'KB', img: imgURL, gender: 'men' },
      { name: 'Krajcsik Dóra', present: false, status: 'KB', img: imgURL, gender: 'women' },
      { name: 'Stiaszni Alexandra', present: false, status: 'KB', img: imgURL, gender: 'women' },
      { name: 'Buzás Szilárd', present: false, status: 'KB', img: imgURL, gender: 'men' },
      { name: 'Dénes András', present: false, status: 'KB', img: imgURL, gender: 'men' },
      { name: 'Dobosi Gábor', present: false, status: 'KB', img: imgURL, gender: 'men' },
      { name: 'Ladányi László', present: false, status: 'senior', img: imgURL, gender: 'men'},
      { name: 'Horváth András Zsolt', present: false, status: 'senior', img: imgURL, gender: 'men'},
      { name: 'Lipka Barbara', present: false, status: 'senior', img: imgURL, gender: 'women'},
      { name: 'Magyar Zoltán', present: false, status: 'senior', img: imgURL, gender: 'men'},
      { name: 'Fodor József Felicián', present: false, status: 'senior', img: imgURL, gender: 'men'}
    ]
  },
  getters: {
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
  },
  mutations: {
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
})
