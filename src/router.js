import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/home.vue';
import Base64 from './views/base64.vue';
import Json from './views/json.vue';
import JsonYaml from './views/json-yaml.vue';
import HashCalculator from './views/hash-calculator.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/base64',
      name: 'base64',
      component: Base64,
    },
    {
      path: '/json',
      name: 'json',
      component: Json,
    },
    {
      path: '/json-yaml',
      name: 'json-yaml',
      component: JsonYaml,
    },
    {
      path: '/hash-calculator',
      name: 'hash-calculator',
      component: HashCalculator,
    },
  ],
});
