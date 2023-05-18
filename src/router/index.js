import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'dashboard'
      },
      meta: {
        breadcrumbName: 'Home',
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/dashboard/Index.vue'),
          meta: {
            breadcrumbName: 'Dashboard',
          },
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
              component: () => import('../views/collection/List.vue'),
              meta: {
                breadcrumbName: 'My Collection',
              },
            }
          ]
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('../views/setting/Index.vue'),
          meta: {
            breadcrumbName: 'Setting',
          },
        },
        {
          path: '/notify',
          name: 'notify',
          component: () => import('../views/notify/Index.vue'),
          meta: {
            breadcrumbName: 'Notify',
          },
      },
      ]
    }
  ]
})

export default router
