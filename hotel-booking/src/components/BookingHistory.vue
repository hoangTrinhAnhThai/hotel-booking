<template>
    <div class="booking-history">
        <tr>
            <th>Name</th>
            <th>Meaage</th>
        </tr>
        <tr v-for="item in listApi" v-bind:key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.message}}</td>
        </tr>
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
            info: null,
            listApi : undefined

        }
    }, 
    mounted () {
        Vue.axios.get('https://hotels-booking-server.herokuapp.com/apiList')
            .then((respone)=> {
                this.listApi = respone.data;
                console.warn(respone)
            })
    }
}
</script>

<style>

</style>
