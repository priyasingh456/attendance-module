import Vue from 'vue'
import App from './App.vue';
import Router from 'vue-router';
import router from '../src/router/index.js';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import AppSpinner from './components/utility/AppSpinner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.use(Router);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component( 'AppSpinner', AppSpinner );

Vue.use(VueToast, {
  position: 'top-right',
});

new Vue({
  router,
  VueToast,
  render: h => h(App),
}).$mount('#app')
