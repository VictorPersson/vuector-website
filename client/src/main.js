import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './router.js';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify); 
Vue.use(VueRouter)

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
