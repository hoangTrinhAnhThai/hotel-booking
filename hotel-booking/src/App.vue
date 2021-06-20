<template>
  <div id="app">
    <page-loader v-bind:isloaded="isloaded" />
    <header-comp/>
    <router-view/>
    <!-- <director-comp/> -->
    <footer-comp/>
  </div>
</template>

<script>
// import axios from 'axios'
import Header from './components/Header.vue'
import PageLoader from './components/PageLoader.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      isloaded: false
    }
  },
  
  async created() {
    this.isloaded = true
    this.axios.get('user/')
    .then((response) => {
      console.warn(response.data)
      this.$store.dispatch('user', response.data)
      this.isloaded = false
    })
    .catch((error)=> {
      console.error(error)
    this.isloaded = false

  })
    

  },
  components: {
    'header-comp': Header,
    'footer-comp': Footer,
    // 'director-comp': Director,
    'page-loader': PageLoader
  }

}
</script>

<style scoped>
.header-comp a{
  color: red;
}

</style>
