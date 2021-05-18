<template>
  <div id="app">
    <header-comp/>
    <router-view/>
    <!-- <login-comp/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Home from './components/Home.vue'
// import Login from './components/Login.vue'


export default {
  name: 'App',
  components: {
    'header-comp': Header
    // 'home-comp': Home,
    // 'login-comp': Login
  }
}
</script>

<style>

</style>
