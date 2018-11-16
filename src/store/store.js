/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable object-property-newline */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

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
    ],
    programs: [
      { id: 0, owner: 'Gubics Flórián', name: 'Halloween-i Teaház', date: '2018.11.01.', procent: 10,
        startText:
          'Teaház megszervezésére szeretnénk támogatást kérni a bizottságtól. Ezen az alkalmon zöldhagymát is felszolgálnánk, így a költségek 500 Ft-al növekednek. Ezen kívül cukor elfogyott, és 2 csomag teafiltert is vásárolni kell az estére.',
        startCost: 1000,
        progressText:
          'A rendezvényt egyhangúan támogatja a bizottság, azon kitétellel, hogy külsősöknek becsület kassza legyen kihelyeze a rendezvény során.',
        progressCost: 1500,
        closeText:
          'Sikeres rendezvényen vagyunk túl. Teltház volt, éjfél után is bőven voltak még. A becsületkasszába 1000 Ft folyt be.',
        closeCost: 1000,
        menu: false
      },
      { id: 1, owner: 'Krajcsik Dóra', name: 'Kolibuli', date: '2018.12.01.', procent: 20,
        startText:
          'Teaház megszervezésére szeretnénk támogatást kérni a bizottságtól. Ezen az alkalmon zöldhagymát is felszolgálnánk, így a költségek 500 Ft-al növekednek. Ezen kívül cukor elfogyott, és 2 csomag teafiltert is vásárolni kell az estére.',
        startCost: 2000,
        progressText:
          'A rendezvényt egyhangúan támogatja a bizottság, azon kitétellel, hogy külsősöknek becsület kassza legyen kihelyeze a rendezvény során.',
        progressCost: 2500,
        closeText:
          'Sikeres rendezvényen vagyunk túl. Teltház volt, éjfél után is bőven voltak még. A becsületkasszába 1000 Ft folyt be.',
        closeCost: 2000,
        menu: false
      },
      { id: 2, owner: 'Papp Márk', name: 'Herman ősz', date: '2018.11.20.', procent: 30,
        startText:
          'Teaház megszervezésére szeretnénk támogatást kérni a bizottságtól. Ezen az alkalmon zöldhagymát is felszolgálnánk, így a költségek 500 Ft-al növekednek. Ezen kívül cukor elfogyott, és 2 csomag teafiltert is vásárolni kell az estére.',
        startCost: 3000,
        progressText:
          'A rendezvényt egyhangúan támogatja a bizottság, azon kitétellel, hogy külsősöknek becsület kassza legyen kihelyeze a rendezvény során.',
        progressCost: 3500,
        closeText:
          'Sikeres rendezvényen vagyunk túl. Teltház volt, éjfél után is bőven voltak még. A becsületkasszába 1000 Ft folyt be.',
        closeCost: 3000,
        menu: false
      }
    ]
  },
  getters,
  mutations
})
