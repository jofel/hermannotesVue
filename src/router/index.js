import Vue from 'vue'
import Router from 'vue-router'
import Jelenlevok from '@/components/Jelenlevok'
import Programok from '@/components/Programok'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/jelenlevok',
      name: 'Jelenlevok',
      component: Jelenlevok
    },
    {
      path: '/programok',
      name: 'Programok',
      component: Programok
    }
  ]
})
