<template>
  <div id="app">
    <header-comp/>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'

export default {
  name: 'App',
  
  async created() {
    const response = await axios('user/');
    this.$store.dispatch('headerShow', true)
    this.$store.dispatch('user', response.data)
  },
  components: {
    'header-comp': Header
  }

}
</script>

<style>

</style>
