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

    }
  },
  async created() {
      localStorage.setItem('disableHeader', true);
      this.axios.get('https://hotels-booking-server.herokuapp.com/user/', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            console.warn(response.data)
            this.user = response.data
            localStorage.setItem('userName', response.data.userDetail.nameUserDetail)
            var res = localStorage.getItem('userName').split(" ");
            var name = res[res.length -1] 
            localStorage.setItem('login', name);

        })
  },
  components: {
    // 'home-comp': Home,
    // 'user-comp': User,
    'header-comp': Header
  }, 
  mounted() {
    
  }

}
</script>

<style>

</style>
