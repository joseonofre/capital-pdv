import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Categories from '@/pages/Categories'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'categorias',
          name: 'Categorias',
          component: Categories
        }
      ]
    }
  ]
})
