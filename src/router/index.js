import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'dashboard'
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/dashboard/Index.vue'),
      },
        {
          path: 'collection',
          name: 'collection',
          component: () => import('../views/collection/Index.vue'),
          redirect: {
            name: 'collection-list'
          },
          children: [
            {
              path: 'list',
              name: 'collection-list',
              component: () => import('../views/collection/List.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
