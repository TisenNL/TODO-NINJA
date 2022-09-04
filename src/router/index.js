import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '@/views/DashboardView'
import ProjectsView from '@/views/ProjectsView'
import TeamView from '@/views/TeamView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
