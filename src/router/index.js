import Vue from 'vue';
import Router from 'vue-router';
import Directory from '../components/Directory';
import About from '../components/About';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/directory'
    },
    {
      path: '/directory',
      name: 'Directory',
      component: Directory
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;