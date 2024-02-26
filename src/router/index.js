import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';

const routes = [
  {
    path: '/login', 
    name: 'login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)', 
    redirect: '/login' 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
