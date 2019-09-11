import Vue from 'vue'
import Router from 'vue-router'
import Cars from './views/Cars.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cars',
      component: Cars
    },
    {
      path: '/houses',
      name: 'houses',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import('./views/Houses.vue')
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: function () {
        return import('./views/Jobs.vue')
      }
    },
    {
      path: '/cars/:id',
      name: 'justcar',
      component: function () {
        return import('./views/OneCar.vue')
      }
    },
    {
      path: '*',
      redirect: '/cars'
    }
  ]
})
