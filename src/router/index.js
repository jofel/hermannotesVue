import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'
import Programs from '@/components/Program/Programs'
import Program from '@/components/Program/Program'
import EditProgram from '@/components/Program/EditProgram'
import CreateProgram from '@/components/Program/CreateProgram'
import Jelenlevok from '@/components/Jelenlevok'
// import Programok from '@/components/Programok'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/program/new',
      name: 'CreateProgram',
      component: CreateProgram
    },
    {
      path: '/program/:id',
      name: 'EditProgram',
      props: true,
      component: EditProgram
    },
    {
      path: '/programs',
      name: 'Programs',
      component: Programs
    },
    {
      path: '/program',
      name: 'Program',
      component: Program
    },
    // {
    //   path: '/program/new',
    //   name: 'CreateProgram',
    //   component: CreateProgram
    // },
    {
      path: '/jelenlevok',
      name: 'Jelenlevok',
      component: Jelenlevok
    }
    // {
    //   path: '/program/edit/:id',
    //   name: 'Edit Program',
    //   component: EditProgram
    // }
    // {
    //   path: '/programok',
    //   name: 'Programok',
    //   component: Programok,
    //   children: [
    //     {
    //       path: 'new',
    //       name: 'CreateProgram',
    //       component: CreateProgram
    //     }
        // {
        //   path: ':id',
        //   name: 'Edit Program',
        //   component: EditProgram,
        //   props: true
        // }
      // ]
    // }
  ],
  mode: 'history'
})
