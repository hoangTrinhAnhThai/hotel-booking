<template>
    <div class="home-comp">
        <home1-comp/>
        
    </div>
</template>

<script>
import Home1 from './Home1.vue'

export default {
    name: 'home-comp',
    data() {
        return {
            user: null
        }
    },
    

    components: {
        'home1-comp': Home1
    }, 
    async created() {
      this.axios.get('https://hotels-booking-server.herokuapp.com/user/', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            this.user = response.data
        })
  },
    
}
</script>

<style scoped>
    

</style>
