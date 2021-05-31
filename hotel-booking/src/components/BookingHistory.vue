<template>
    <div class="booking-history">
        <div class="container">
            <h2>BOOKING HISTORY</h2>
            <br>
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="setActive('incomplete')" :class="{ active: isActive('incomplete') }" href="#incomplete">Incomplete</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="setActive('completed')" :class="{ active: isActive('completed') }" href="#completed">Completed</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click.prevent="setActive('canceled')" :class="{ active: isActive('canceled') }" href="#canceled">Canceled</a>
                </li>
            </ul>
            <div class="tab-content py-3" id="myTabContent">
                <div class="tab-pane fade" :class="{ 'active show': isActive('incomplete') }" id="incomplete">
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>Room</th>
                            <th>Type</th>
                            <th>Capacity</th>
                            <th>Start</th>
                            <th>End</th>
                            <th></th>
                        </tr>
                        <tr v-for="(item, index) in listBookingAfter" v-bind:key="item.id">
                            <td>{{index + 1}}</td>
                            <td>{{item.room.name}}</td>
                            <td>{{item.room.type}}</td>
                            <td>{{item.room.capacity}}</td>
                            <td>{{item.start}}</td>
                            <td>{{item.end}}</td>
                            <td><button type="submit">Cancel</button></td>
                        </tr>
                    </table>
                </div>
                <div class="tab-pane fade" :class="{ 'active show': isActive('completed') }" id="completed">
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>Room</th>
                            <th>Type</th>
                            <th>Capacity</th>
                            <th>Start</th>
                            <th>End</th>
                        </tr>
                        <tr v-for="(item, index) in listBookingBefore" v-bind:key="item.id">
                            <td>{{index + 1}}</td>
                            <td>{{item.room.name}}</td>
                            <td>{{item.room.type}}</td>
                            <td>{{item.room.capacity}}</td>
                            <td>{{item.start}}</td>
                            <td>{{item.end}}</td>
                        </tr>
                    </table>
                </div>
                <div class="tab-pane fade" :class="{ 'active show': isActive('canceled') }" id="canceled">
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>Room</th>
                            <th>Type</th>
                            <th>Capacity</th>
                            <th>Start</th>
                            <th>End</th>
                        </tr>
                        <tr v-for="(item, index) in listBookingCanceled" v-bind:key="item.id">
                            <td>{{index + 1}}</td>
                            <td>{{item.room.name}}</td>
                            <td>{{item.room.type}}</td>
                            <td>{{item.room.capacity}}</td>
                            <td>{{item.start}}</td>
                            <td>{{item.end}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name: 'booking-history',
    data() {
        return {
            info: null,
            listApi : undefined,
            activeItem: 'incomplete',
            listBookingAfter: null, 
            listBookingBefore: null, 
            listBookingCaceled: null
        }
    }, 
    async created() {
        
        this.axios.get('user/history-booking-after', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response)=> {
                this.listBookingAfter = response.data;
                console.warn(response.data)
            }),
        this.axios.get('user/history-booking-before', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response)=> {
                this.listBookingBefore = response.data; 
            })
    }, 
    methods: {
        isActive (menuItem) {
            return this.activeItem === menuItem
        },
        setActive (menuItem) {
            this.activeItem = menuItem
        }
    }
}
</script>

<style scoped> 
    table {
        width: 72.5vw;
        /* background-color: aqua; */
        
    }

     th, td {
        border: 0.5px solid rgb(226, 219, 219);
        text-align: center;
    }

    th {
        background-color: rgb(133,176,210);
    }
</style>
