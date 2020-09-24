import {
  createRouter,
  createWebHashHistory,
  RouteLocationRaw,
} from 'vue-router'

import { RN } from './enum'

export const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'todo' },
    },
    {
      path: '/todo',
      name: RN.TODO,
      component: () => import('./views/Todo'),
    },
    {
      path: '/done',
      name: RN.DONE,
      component: () => import('./views/Done'),
    },
    {
      path: '/all',
      name: RN.ALL,
      component: () => import('./views/All'),
    },
  ],
})

export const __HREF__ = (to: RouteLocationRaw) => router.resolve(to).href
