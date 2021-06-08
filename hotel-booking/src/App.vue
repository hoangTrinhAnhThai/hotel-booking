<template>
  <div id="app">
    <header-comp/>
    <router-view/>
    <!-- <director-comp/> -->
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
// import PageLoader from './components/PageLoader.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  
  async created() {
    const response = await axios('user/');
    this.$store.dispatch('user', response.data)
    console.warn(response.data)
    
  },
  components: {
    'header-comp': Header,
    // 'director-comp': Director,
    // 'page-loader': PageLoader
  }

}
</script>

<style scoped>


</style>
