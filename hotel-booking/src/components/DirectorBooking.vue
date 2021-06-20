<template>
    <div class="director-booking">
        <!-- <director-header/> -->
        <div class="booking">
            <div class="hotelSelection">
                <select v-model="selectedHotel">
                    <option selected value="all">All</option>
                    <option v-for="i in listHotel" :key="i.id" :value="i.id">{{i.name}}</option>
                </select>
                <div class="select">
                    <select v-model="selectedMonth" >
                        <option value="none">Chon thang</option>
                        <option v-for="n in 12" :key="n" :value="n">{{n}}</option>
                    </select>
                </div>
                <div class="btn">
                    <button v-on:click="fetch">Search</button>
                </div>
            </div>
            <div class="list-booking">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Hotel</th>
                        <th>Host's name</th>
                        <th>Room</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Total price</th>
                    
                    </tr>
                    <tr v-for="(booking, index) in bookings" :key="booking.id">
                        <td>{{index + 1}}</td>
                        <td></td>
                        <td>{{booking.name_user_detail}}</td>
                        <td>{{booking.name}}</td>
                        <td>{{booking.start}}</td>
                        <td>{{booking.end}}</td>
                        <td>{{booking.totalPrice}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
// import DirectorHeader from './DirectorHeader.vue'

export default {
    name: 'director-booking',
    data() {
        return {
            listHotel: null,
            bookings: null,
            selectedHotel: null,
            selectedMonth: null
        }
    },

    methods: {
        async fetch() {
            if(this.selectedHotel == 'all' && this.selectedMonth == 'none') {
                this.axios.get('director/hotel/thongke')
                .then((response) => {
                    console.warn(response.data)
                    this.bookings = response.data
                })
            } else if (this.selectedHotel == 'all' && this.selectedMonth != 'none') {
                console.warn('chua co all hotel trong thang')
            } else if (this.selectedHotel != 'all' && this.selectedMonth == 'none') {
                this.axios.get(`director/hotel/thongke/${this.selectedHotel}`)
                .then((response) => {
                    console.warn(response.data)
                    this.bookings = response.data
                })
            } else {
                this.axios.get(`director/hotel/thongke/${this.selectedHotel}/${this.selectedMonth}`) 
                .then((response) => {
                    this.bookings = response.data;
                    console.warn(response.data)
                })
            }
            
        },
    },

    async created() {
        this.$store.dispatch('headerShow', false)

        this.axios.get('director/hotel', {
            headers: {
                Authorization: localStorage.getItem('token') 
            }
        })
        .then((response) => {
            this.listHotel = response.data
            console.warn(this.listHotel)
        })

        this.axios.get('director/hotel/thongke', {
            headers: {
                Authorization: localStorage.getItem('token') 
            }
        })
        .then((response) => {
            this.bookings = response.data
            console.warn(this.bookings)
        })

    },
    components: {
        // 'director-header': DirectorHeader
    }
}
</script>

<style scoped>
    .director-header {
        float: left;
        width: 20vw;
        height: 100vh;
        background-color: rgb(114,167,207);
        position: fixed;
    }

    .director-booking .booking {
        margin-left: 23vw;
        padding-top: 15vh;

    }

    table {
        margin-top: 5vh;
        width: 70vw;
    }

    table th, td { 
        border: 1px solid black;
    }

</style>
