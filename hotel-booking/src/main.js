import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './axios'
import store from './vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './city.json'
import VueLazyload from 'vue-lazyload'
import VueCarousel from 'vue-carousel';

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Blog from './components/Blog.vue'
import Search from './components/SearchListHotel.vue'
import SearchListHotel from './components/SearchListHotel.vue'
import ViewRoomSearch from './components/ViewRoomSearch.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import UserAccount from './components/UserAccount.vue'
import User from './components/User.vue'
import UserBookingHistory from './components/UserBookingHistory.vue'
import Director from './components/Director.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import ResetPassword from './components/ResetPassword.vue'
import Admin from './components/Admin.vue'
import DirectorRoom from './components/DirectorRoom.vue'
import DirectorBooking from './components/DirectorBooking.vue'
import AdminStatistic from './components/AdminStatistic.vue'



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
  {path: '/director', component: Director},
  {path: '/forgot-password', component: ForgotPassword},
  {path: '/reset-password/:tokenPassword', component: ResetPassword},
  {path: '/admin', component: Admin},
  {path: '/director/hotel/:idHotel/room', component: DirectorRoom},
  {path: '/director/hotel/booking', component: DirectorBooking},
  {path: '/admin/thongke', component: AdminStatistic}




  // {path: '/forgot-password', component: ForgotPassword }
]


Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueLazyload)
Vue.use(VueCarousel);
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