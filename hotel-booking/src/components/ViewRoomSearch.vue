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
                            <table>
                                <tr>
                                    <th >STT</th>
                                    <th id="name">Room name</th>
                                    <th id="type">Type</th>
                                    <th id="price">Price</th>
                                    <th id="capacity">Capacity</th>
                                    <th></th>
                                </tr>
                                
                                <tr v-for="(i, index) in item.hotel.rooms" v-bind:key="i.id">
                                    <!-- <form action=""> -->
                                     <td>{{index + 1}}</td>
                                        <td>{{i.name}}</td>
                                        <td>{{i.type}}</td>
                                        <td>{{i.price}}</td>
                                        <td>{{i.capacity}}</td>
                                        <td>
                                            <button v-on:click="bookroom(i.id)" type="submit">Book Room</button>
                                        </td>
                                    <!-- </form> -->
                                </tr>

                            </table>
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
            city: JSON.parse(localStorage.getItem('city'))
        }
    },
    methods: {
        bookroom(idRoom) {
            console.warn("idroom: " + idRoom)
        },
        handleSearch() {
            this.axios.post('https://hotels-booking-server.herokuapp.com/search', this.search)
            .then((response) => {
                // console.warn(response.data)
                // localStorage.setItem("listSearch", JSON.stringify(response.data));
                localStorage.setItem("listSearch", JSON.stringify(response.data));
                localStorage.setItem('search', JSON.stringify(this.search))
                this.$router.push('/search/list-hotel');
            })
        }
    },
    mounted() {
        this.search= JSON.parse(localStorage.getItem('search'))
        console.warn(this.listHotel)
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
        border: 0.5px solid grey;
        padding: 1.2vh 1vw;
        background-color: #e4d56a;
    }

    button {
        border: 1px solid grey;
        font-size: 1vw;
        padding: 1vh 0.7vw;
        border-radius: 10px;
    }

</style>
