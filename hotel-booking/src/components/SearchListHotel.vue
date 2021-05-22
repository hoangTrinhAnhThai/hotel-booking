<template>
    <div class="search-list-hotel">
        <header-comp/>
        <div class="container">
            <div class="left-container">
                <div class="search"></div>
            </div>
            <div class="right-container">
                <h1>Cac khu vuc lan can</h1>
                <div class="hotel-list">
                    <ul class="hotel" v-for="item in listHotel" v-bind:key="item.id">
                        <li><img src="" alt=""></li>
                        <li>
                            <div class="content">
                                <ul>
                                    <li>{{item.name}}</li>
                                    <li>{{item.address.street}} - {{item.address.city}}</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'search-list-hotel',
    data() {
        return {
            listHotel: null,
        }
    },
    components: {
        "header-comp": Header,
    },
    // mounted () {
    //     this.axios.get('https://hotels-booking-server.herokuapp.com/list-hotel')
    //         .then((respone)=> {
    //             this.listHotel = respone.data;
    //             console.warn(respone)
    //         })
    // }

}
</script>

<style scoped>
    

</style>
