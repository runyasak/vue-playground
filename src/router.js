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
      path: '/raw-html',
      name: 'RawHTML',
      meta: { title: 'Raw HTML' }
    },
    {
      path: '*',
      redirect: { name: 'HelloWorld' },
      meta: { title: 'Hello World!' }
    },
    {
      path: '/conditional-rendering',
      name: 'ConditionalRendering',
      meta: { title: 'Conditional Rendering' }
    }
  ]
})
