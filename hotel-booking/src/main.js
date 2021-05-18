import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import User from './components/User.vue'

// import ForgotPassword from './components/ForgotPassword.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'axios/dist/axios'
// import 'axios/dist/axios.min.js'
// import '@/assets/css/main.css'

const routes= [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/signup', component: Signup},
  {path: '/blog', component: User},

  // {path: '/forgot-password', component: ForgotPassword }
]


Vue.use(VueRouter);
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')