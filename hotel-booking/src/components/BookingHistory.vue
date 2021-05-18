<template>
    <div class="booking-history">
        {{ info}}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae nulla voluptatibus earum cumque iure, reprehenderit, voluptatem veniam consequuntur explicabo dicta aperiam totam nostrum. Esse earum facilis quos. Adipisci, consequuntur?
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name: 'booking-hietory',
    data() {
        return {
            info: null
        }
    }, 
    mounted () {
        Vue.axios.get('https://hotels-booking-server.herokuapp.com/apiList')
            .then(response => (this.info = response.data))
    }
}
</script>

<style>

</style>
