import Vue from 'vue';
import Router from 'vue-router';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import HelloWorld from '@/components/HelloWorld';
import User from '@/components/User/User';
import Index from '@/components/Index/Index';
import Sample from '@/components/Sample/Sample';

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    /*
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    */
    {
      path: '/user/:id',
      name: 'User',
      component: User,
    },
    {
      path: '/sample/',
      name: 'Sample',
      component: Sample,
    },
  ],
});
