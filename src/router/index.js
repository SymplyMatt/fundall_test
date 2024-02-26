import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../pages/Welcome.vue';

const routes = [
  {
    path: '/welcome', 
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/:pathMatch(.*)', 
    redirect: '/welcome' 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
