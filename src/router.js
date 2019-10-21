import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      meta: { title: 'Hello World!' }
    },
    {
      path: '*',
      redirect: { name: 'HelloWorld' },
      meta: { title: 'Hello World!' }
    },
    {
      path: '/loop',
      name: 'Loop',
      meta: { title: 'Loop v-for' }
    }
  ]
})
