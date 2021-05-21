<template>
  <div id="app">
    <home-comp/>
    <!-- <header-comp/> -->
    <!-- <router-view/> -->
    <!-- <user-comp/> -->
  </div>
</template>

<script>
import Home from './components/Home.vue'
// import Header from './Header.vue'

// import User from './components/User.vue'


export default {
  name: 'App',
  components: {
    'home-comp': Home,
    // 'user-comp': User,
    // 'header-comp': Header
  }
}
</script>

<style>

</style>
