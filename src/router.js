import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
  path: '/',
    component: Home,
  children: [

  ]
  }
]


  export default createRouter({
    history: createWebHistory(),
    routes,
  })