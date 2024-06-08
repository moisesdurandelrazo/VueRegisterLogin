import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteEdit from '../views/EstudianteEdit.vue'
import EstudianteNew from '../views/EstudianteNew.vue'
import EstudianteView from '../views/EstudianteView.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import store from '@/store'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/create',
    name: 'create',
    component: EstudianteNew,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EstudianteEdit,
    meta: { requiresAuth: true }
  },
  {
    path: '/view/:id',
    name: 'view',
    component: EstudianteView,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.isLoggedIn) {
        next('/login'); 
    } else {
        next(); 
    }
});


export default router
