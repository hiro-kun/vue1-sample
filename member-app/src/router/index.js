import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import User from '@/components/User/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
    },
  ],
});
