import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'collection'
      },
      children: [
        {
          path: 'collection',
          name: 'collection',
          component: () => import('../views/collection/index.vue'),
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
