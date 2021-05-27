import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './axios'
import store from './vuex'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Blog from './components/Blog.vue'
import Search from './components/SearchListHotel.vue'
import SearchListHotel from './components/SearchListHotel.vue'
import ViewRoomSearch from './components/ViewRoomSearch.vue'


import UserAccount from './components/UserAccount.vue'
import User from './components/User.vue'
import UserBookingHistory from './components/UserBookingHistory.vue'

// import ForgotPassword from './components/ForgotPassword.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'axios/dist/axios'
// import 'axios/dist/axios.min.js'
// import '@/assets/css/main.css'

const routes= [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/signup', component: Signup},
  {path: '/blog', component: Blog},
  {path: '/user/account', component: UserAccount},
  {path: '/user/booking-history', component: UserBookingHistory},
  {path: '/user', component: User},
  {path: '/search', component: Search},
  {path: '/search/list-hotel', component: SearchListHotel},
  {path: '/search/list-hotel/viewrooms', component: ViewRoomSearch},


  // {path: '/forgot-password', component: ForgotPassword }
]


Vue.use(VueRouter);
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')