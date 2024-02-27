import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../pages/Welcome.vue';
import Login from '../pages/Login.vue';
import SignUp from '../pages/SignUp.vue'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
  {
    path: '/welcome', 
    name: 'welcome',
    component: Welcome,
    beforeEnter: (to, from, next) => {
      document.body.classList.add('h-screen');
      next();
    },
  },
  {
    path: '/login', 
    name: 'login',
    component: Login
  },
  {
    path: '/signup', 
    name: 'signup',
    component: SignUp
  },
  {
    path: '/dashboard', 
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/signup', 
    name: 'signup',
    component: SignUp
  },
  {
    path: '/:pathMatch(.*)', 
    redirect: '/welcome' 
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (from.path === '/welcome') {
    document.body.classList.remove('h-screen');
  }
  next();
});

export default router;
