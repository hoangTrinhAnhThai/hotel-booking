<template>
  <div id="app">
    <header-comp/>
    <router-view/>
    <!-- <director-comp/> -->
    <footer-comp/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
// import PageLoader from './components/PageLoader.vue'
import Footer from './components/Footer.vue'

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
    'footer-comp': Footer
    // 'director-comp': Director,
    // 'page-loader': PageLoader
  }

}
</script>

<style scoped>
.header-comp a{
  color: red;
}

</style>
