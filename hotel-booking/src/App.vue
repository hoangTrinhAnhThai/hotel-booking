<template>
  <div id="app">
    <header-comp :user='user'/>
    <router-view :user='user'/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  data() {
    return{
      user: null
    }
  },
  async created() {
      localStorage.setItem('disableHeader', true);
      this.axios.get('https://hotels-booking-server.herokuapp.com/user/' , {
            headers: {
                Authorization: localStorage.getItem('token')
            }
      })
      .then((response) => {
        this.user = response.data
      })
      
  },
  components: {
    // 'home-comp': Home,
    // 'user-comp': User,
    'header-comp': Header
  }

}
</script>

<style>

</style>
