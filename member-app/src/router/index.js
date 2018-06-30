import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import HelloWorld from '@/components/HelloWorld';
import User from '@/components/User/User';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User,
    },
  ],
});
