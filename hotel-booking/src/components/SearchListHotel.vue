<template>
    <div class="search-list-hotel">
        <page-loader v-bind:isloaded="isloaded"/>
        <!-- <header-comp/> -->
            <div class="left-container">
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
                            <input type="date" name="" id="" v-model="search.start" :min="nowDate">
                        </div>
                        <div class="end">
                            <h6>Check-out</h6>
                            <input type="date" name="" id="" v-model="search.end" :min="search.start">
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
            <div class="right-container">
                <h1>Cac khu vuc lan can</h1>
                <h4 v-if="isHave">{{isHave}}</h4>
                <div class="hotel-list">
                    <ul class="hotel" v-for="(item,index) in listHotel" v-bind:key="item.id">
                            <li id="imgHotel">
                                <img :src="currentImg(index)">
                            </li>
                            <li style="flex: 0 35vw">
                                <div class="content">
                                    <ul>
                                        <li id="nameHotel">{{item.hotel.name}}</li>
                                        <li>{{item.hotel.address.street}} - {{item.hotel.address.city}}</li>
                                        <li>{{item.hotel.standar}}</li>
                                    </ul>
                                </div>
                            </li>
                            <li id="btn">
                                <button v-on:click="viewroom(item.hotel.id)"  type="submit">View rooms</button>
                            </li>
                        
                    </ul>
                </div>
            </div>
    </div>
</template>

<script>
import PageLoader from './PageLoader.vue'

export default {
    name: 'search-list-hotel',
    data() {
        return {
            nowDate: localStorage.getItem('nowDate'),
            listHotel: JSON.parse(localStorage.getItem("listSearch")),
            infImg: {
                id: null,
                img: null,
            },
            search: {
                cityName: null, 
                start: null,
                end: null,
                capacity: 1
            }, 
            city: JSON.parse(localStorage.getItem('city')),
            isloaded: null,
            isHave: null,
            timer: null,
            currentIndex: 0,
            imgs: null
        }
    },
    mounted () {
        this.startSlide();
        this.isloaded = true
        this.$store.dispatch('headerShow', true)

        this.search= JSON.parse(localStorage.getItem('search'))
        console.warn(this.listHotel)
        if(this.listHotel.length == 0) {
            this.isHave = 'KHONG CO HOTEL NAO'
        }
        this.isloaded = false
        console.warn(this.nowDate)
    },
    methods: {
        viewroom(idHotel) {
            localStorage.setItem('idHotel', idHotel);
            this.$router.push('/search/list-hotel/viewrooms')
        },
        handleSearch() {
            this.isloaded = true
            this.axios.post('search', this.search)
            .then((response) => {
                localStorage.setItem("listSearch", JSON.stringify(response.data));
                localStorage.setItem('search', JSON.stringify(this.search))
                console.warn(JSON.parse(localStorage.getItem('listSearch')))
                this.$router.go(0)
                this.isloaded = false
            })
            .catch((error) => {
                console.warn(error)
                this.isloaded = false
                
            })
        },
        startSlide() {
            this.timer = setInterval(this.next, 5000)
        },
        next() {
            this.currentIndex +=1
        },
        prev() {
            this.currentIndex -=1
        },
        currentImg(i) {
            
            // console.warn(this.listHotel[i].hotel)
            // console.warn(this.listHotel[i].images.length)
            // console.warn(this.listHotel[i].images[Math.abs(this.currentIndex) % this.listHotel[i].images.length].img)
            return 'data:image/jpeg;base64,' + this.listHotel[i].hotel.images[Math.abs(this.currentIndex) % this.listHotel[i].hotel.images.length].img;
        }
    },
    components: {
        'page-loader': PageLoader

    }

}
</script>

<style scoped>

    .search-list-hotel img {
        height: 25vh;
        width: 15vw;
    }

     .left-container {
        width: 25vw;
        margin-left: 2.5vw;
        float: left;
        padding-top: 14vh;
        border-right: 1px solid rgb(235, 231, 231);
    } 

    .left-container .search {
        margin-left: 2.3vw;
        background-color: #e6dd9d;
        margin-right: 2vw;
    }

    .left-container .search form {
        margin-left: 2.5vw;
        padding: 5vh 0;
    }

    .left-container .search h6{
        font-size: 0.9vw;
        margin-top: 4vh;
    }

    .left-container .search input, select{
        width: 16vw;
        border: 0.5px solid rgb(163, 159, 159);
        padding: 1vh 0.8vw;
        font-size: 1vw;
    }

    .left-container .search [type="submit"] {
        width: 16vw;
        margin-top: 5vh;
        border: 0.5px solid grey;
        padding: 1.2vh 1vw;
        background-color: #e4d56a;
    }

    .right-container {
        margin-left: 3vw;
        margin-top: 13vh;
        max-width: 73.5vw;
        float: left;
    }

    ul {    
        list-style: none;
        
    }
    
    .hotel-list > ul {
        border: 1px solid #92b6c5;
        padding: 2vh 3vw 5vh;
    }

    .hotel {
        display: flex;
        margin-top: 3vh;
        /* background-color: aqua; */
        width: 64vw;
    }

    ul li {
        margin-top: 3vh;
    }

    #nameHotel {
        font-weight: bolder;
    }
    button {
        font-size: 1.2vw;
        border: 0.5px solid gray;
        background-color: #92b6c5;
        border-radius: 10px;
        padding: 1vh;
    }
</style>
