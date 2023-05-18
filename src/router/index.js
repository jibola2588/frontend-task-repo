import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard/companyOverview',
    name: 'DashboardView',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue')
  },
  {
    path: '/companyUser/all',
    name: 'StaffListView',
    component: () => import(/* webpackChunkName: "staffList" */ '../views/StaffListView.vue')
  },
  {
    path: '/company/details',
    name: 'CompanyDetailsView',
    component: () => import(/* webpackChunkName: "companyDetails" */ '../views/CompanyDetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
