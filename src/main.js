// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'
import AlertComponent from './components/Shared/Alert.vue'

import { store } from './store/store'

Vue.use(Vuetify)
Vue.component('app-alert', AlertComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCAhEpFImVzOA0wb5jgQHVs5WWXNL3_MhE',
      authDomain: 'hermannotes-c75d4.firebaseapp.com',
      databaseURL: 'https://hermannotes-c75d4.firebaseio.com',
      projectId: 'hermannotes-c75d4',
      storageBucket: 'hermannotes-c75d4.appspot.com'
    })

    this.$store.dispatch('loadPrograms')
  }
})
