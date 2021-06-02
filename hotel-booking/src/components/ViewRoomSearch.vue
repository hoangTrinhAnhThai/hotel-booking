<template>
    <div class="view-room-search">
        <div class="img-hotel">
            <div 
                class="room" 
                v-for="item in listHotel" 
                v-bind:key="item.id"
                >
                    <div class="htel" v-if="item.hotel.id == idHotel">
                        <ul>
                            <li>
                            <h4>{{item.hotel.name}}</h4>
                        </li>
                        <li>
                            <h6>{{item.hotel.address.street}}, {{item.hotel.address.city}}</h6>
                        </li>
                        <li>
                            <div class="img">
                                <div class="img2">
                                    <img 
                                        style="border-top-left-radius: 15px; border-bottom-left-radius: 15px" 
                                        src="https://res.cloudinary.com/spacejoy/w_800/v1585045500/blog/article/5e79df773b09900028907d20/5e79dffc3b09900028907d22.jpg" alt="">
                                </div>
                                <div class="img2">
                                    <div class="img4">
                                        <div class="img4-1">
                                            <img src="https://res.cloudinary.com/spacejoy/w_800/v1585045500/blog/article/5e79df773b09900028907d20/5e79dffc3b09900028907d22.jpg" alt="">
                                            <img
                                                style="border-top-right-radius: 15px" 
                                                src="https://res.cloudinary.com/spacejoy/w_800/v1585045500/blog/article/5e79df773b09900028907d20/5e79dffc3b09900028907d22.jpg" alt="">
                                        </div>
                                        <div class="img4-2">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO579fxZrPbMTnXkboSTp512QdkMa--JsxYEog9HJVWAw3P4cXw_DpioxPf3IBlDeKUQg&usqp=CAU" alt="">
                                            <img 
                                                style="border-bottom-right-radius: 15px" 
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpkYg1zz3HDe9JfM6qIP7IHMmj4PNUPJZhA&usqp=CAU" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        </ul>
                        <div class="content">
                            <div class="phongtrong">
                                <h2>Phong trong</h2>
                                <div v-for="i in item.hotel.rooms" v-bind:key="i.id" class="showphong">
                                    <div class="img">
                                        <!-- <img :src="'data:image/jpeg;base64,' + i.images[0].img"/> -->
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpkYg1zz3HDe9JfM6qIP7IHMmj4PNUPJZhA&usqp=CAU" alt="">
                                    </div>
                                    <div class="infor">
                                        <h3>{{i.name}}</h3>
                                        <h6>{{i.type}}</h6>
                                        <h6>{{i.price}}</h6>
                                        <h6>Capacity: {{i.capacity}}</h6>
                                    </div>
                                    <div class="chucnang">
                                        <b-button id="show-btn" v-b-modal="modalId(index)">Book room</b-button>
                                            <b-modal :id="'modal'+index" hide-footer title="Booking room">    
                                                <div class="bv-modal-example">
                                                    <form @submit.prevent="bookingroom(i.id)">
                                                        <table v-if="user">
                                                            <tr>
                                                                <td>Ten phong: </td>
                                                                <td>{{i.id}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Loai: </td>
                                                                <td>{{i.type}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Check-in:</td>
                                                                <td>
                                                                    {{search.start}}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Check-out: </td>
                                                                <td>
                                                                    {{search.end}}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tong tien: </td>
                                                                <td>{{priceTotal(i.price)}}</td>
                                                            </tr>
                                                        </table>
                                                        <div v-if="!user" class="notlogin">
                                                            <h1>Ban chua dang nhap</h1>
                                                            <h6>Dang nhap de dat phong</h6>
                                                        </div>
                                                        <div class="bookBtn">
                                                            <div class="btn">
                                                                <button v-if="user" @click="$bvModal.hide('modal' + index)" type="submit">Book</button>
                                                                <span v-if="!user"><router-link to="/login">Login</router-link></span>
                                                                <button class="mt-3" block @click="$bvModal.hide('modal' + index)">Cancel</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </b-modal>
                                    </div>
                                </div>
                        </div>
                        <div class="search">
                    <form @submit.prevent="handleSearch" method="post">
                        <h5>Search</h5>
                        <div class="where">
                            <h6>Destination</h6>
                            <!-- <input type="search" name="" id="" v-model="search.cityName"> -->
                            <div class="render">
                                <select v-model="search.cityName" aria-placeholder="Choose here">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option v-for="(option) in city" v-bind:key="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="start">
                            <h6>Check-in</h6>
                            <input type="date" name="" id="" v-model="search.start">
                        </div>
                        <div class="end">
                            <h6>Check-out</h6>
                            <input type="date" name="" id="" v-model="search.end">
                        </div>
                        <div class="capacity">
                            <h6>Capacity</h6>
                            <input type="number" name="" id="" min="1" value="1" v-model="search.capacity">
                        </div>
                        <div class="searchButton">
                            <button type="submit">Search</button>
                        </div>
                     </form>
                </div>
                    </div>
                        </div>
                    
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'view-room-search',
    data() {
        return {
            listHotel: JSON.parse(localStorage.getItem("listSearch")),
            idHotel: localStorage.getItem('idHotel'),
            search: {
                cityName: "Đà Nẵng", 
                start: null,
                end: null,
                capacity: 1
            },
            city: JSON.parse(localStorage.getItem('city')),
            bookingRequest: {
                idRoom: null,
                start: null,
                end: null
            },
            priceTotalB: null
        }
    },
    methods: {
        handleSearch() {
            this.axios.post('search', this.search)
            .then((response) => {
                localStorage.setItem("listSearch", JSON.stringify(response.data));
                localStorage.setItem('search', JSON.stringify(this.search))
                this.$router.push('/search/list-hotel');
            })
        },
        modalId(i) {
            return 'modal' + i;
        },
        bookingroom(roomId) {
            this.bookingRequest.idRoom = roomId;
            this.bookingRequest.start = this.search.start
            this.bookingRequest.end = this.search.end
            this.axios.post('user/booking', this.bookingRequest)
            // this.handleSearch();
        },

        priceTotal(price) {

            const date1 = new Date(this.search.start);
            const date2 = new Date(this.search.end);
            const oneDay = 1000 * 60 * 60 * 24;
            const diffInTime = date2.getTime() - date1.getTime();
            const diffInDays = Math.round(diffInTime / oneDay);
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price*diffInDays)
        },

        formatPrice(price) {
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price)
        }
    },
    mounted() {
        this.search= JSON.parse(localStorage.getItem('search'))
        this.$store.dispatch('headerShow', true)
    },
    computed: {
        ...mapGetters(['user']),
        
    }
}
</script>

<style scoped>
    .view-room-search{
        padding-top: 12vh;
        width: 86.5vw;
        margin: 0 auto;
    }

    ul {
        list-style: none;
    }

    ul li {
        margin-top: 2vh;
    }

    .img {
        display: flex;
    
    }

    .img2 {
        margin-right: 1vw;
    }

    .img2 img{
        width: 40vw;
        height: 48vh;
    }
    
    .img2 .img4 {
        display: flex;
        flex-flow: column wrap;
    }

    .img2 .img4 img {
        width: 20vw;
        height: 23.2vh;
        margin-right: 0.8vw;
    }

    .img2 .img4 .img4-2 {
        margin-top: 1.5vh;

    }

    .phongtrong {
        margin-left: 2vw;
        margin-top: 5vh;
        float: left;
    }

    table {
        width: 60vw;
    }

    table td, th {
        text-align: center;
        border: 1px solid rgb(236, 234, 234);
        padding: 2vh 1vw;
    }

    .bv-modal-example table {
        width: 35vw;
        margin: 0 auto;
    }

    .bv-modal-example .bookBtn {
        width: 50vw;
        margin: 3vh auto;
    }

    .bv-modal-example .bookBtn .btn{
        margin: 0 20%;
    }

    .bv-modal-example .bookBtn button, a {
        margin: 0 1.5vw;
        /* width: 6.5vw; */
        text-decoration: none;
        font-size: 1.3vw;
        background-color: rgb(133,176,210);
    }

    .bv-modal-example .bookBtn a {
        padding: 1.05vh 1.1vw;
        border-radius: 10px;
        border: 1px solid rgb(80, 79, 79);
        color: white;
    }

    .bv-modal-example .bookBtn .mt-3{
        background-color: rgb(233, 81, 81);
        color: white;
    }

    .bv-modal-example input {
        width: 12vw;
    }

    #name {
        width: 15vw;
    }


    .search {
        float: right;
        width: 24vw;
        margin-top: 8vh;
    }

    .search form {
        margin-left: 2vw;
        padding: 2vw;
        border: 1px solid rgb(185, 180, 180);
    }

    .search form input, select {
        width: 18vw;
        border: 0.5px solid rgb(163, 159, 159);
        padding: 1vh 0.8vw;
        font-size: 1vw;
    }

    .search form h6 {
        font-size: 0.9vw;
        margin-top: 4vh;
    }

    .search form button {
        width: 18vw;
        margin-top: 5vh;
        padding: 1.2vh 1vw;
        background-color: #e4d56a;
    }

    button {
        border: 1px solid rgb(80, 79, 79);
        font-size: 1vw;
        padding: 1vh 0.7vw;
        border-radius: 10px;
    }

    .bv-modal-example h1, h6 {
        /* text-align: center */
    }


/* ------------- */

    .phongtrong .showphong {
        /* background-color: aqua; */
        overflow: hidden;
        border: 1px solid rgb(209, 206, 206);
        padding: 4vh 3vw;
        border-radius: 10px;
        margin-top: 5vh;
    }

    .phongtrong .img img {
        height: 25vh;
        width: 18vw;
    }

    .phongtrong .img {
        float: left;
    }

    .phongtrong .infor {
        float: left;
        margin: 0vh 3vw;
        width: 22vw;
    }

    .phongtrong .chucnang {
        float: right;
        width: 3vw;
        margin-bottom: 2vh;
    }

    .phongtrong .infor h3 {
        border-bottom: 2px solid rgb(224, 112, 112);
        padding-bottom: 2vh;
    }

    .phongtrong .infor h6 {
        text-align: start;
        margin-top: 2vh;
    }
</style>
