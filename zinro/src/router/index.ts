import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Balloon from '@/components/Balloon.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/balloon',
      name: 'Balloon',
      component: Balloon
    }
  ]
})
