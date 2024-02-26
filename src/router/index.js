import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../pages/Welcome.vue';
import Login from '../pages/Login.vue';

const routes = [
  {
    path: '/welcome', 
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/login', 
    name: 'login',
    component: Login
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

export default router;
