<template>
    <div class="search-list-hotel">
        <header-comp/>
            <div class="left-container">
                <div class="search">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                </div>
            </div>
            <div class="right-container">
                <h1>Cac khu vuc lan can</h1>
                <div class="hotel-list">
                    <!-- <ul class="hotel" v-for="item in listHotel" v-bind:key="item.id">
                        <li id="imgHotel">
                            <img :src="infImg.img">
                        </li>
                        <li style="flex: 0 35vw"> -->
                            <!-- <div class="content">
                                <ul>
                                    <li>{{listHotel.name}}</li>
                                    <li>{{listHotel.address.street}} - {{item.address.city}}</li>
                                </ul>
                            </div> -->
                            <!-- <div class="content">
                                <ul>
                                    <li id="nameHotel">{{listHotel.hotel.name}}</li>
                                    <li>{{listHotel.hotel.address.street}} - {{listHotel.hotel.address.city}}</li>
                                    <li>{{listHotel.hotel.standar}}</li>
                                </ul>
                            </div>
                        </li>
                        <li id="btn">
                            <button type="submit">View rooms</button>
                        </li>
                    </ul> -->
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
            listHotel: JSON.parse(localStorage.getItem("listSearch") || "[]"),
            infImg: {
                id: null,
                img: null,
            }
        }
    },
    components: {
        "header-comp": Header,
    },
    mounted () {
        this.axios.get('https://hotels-booking-server.herokuapp.com/list-hotel/13')
        .then((response)=> {
            // this.listHotel = response.data;
            this.infImg.img = 'data:image/jpeg;base64,' + response.data.images[0].img;
            console.warn(this.listHotel)
        })
        
    }

}
</script>

<style scoped>

    .search-list-hotel img {
        height: 25vh;
        width: 15vw;
    }

    .header-comp {
        position: relative;
        top: 0vh;
        border-bottom: 0.5px solid rgb(235, 231, 231);

    }

    .search-list-hotel {
        margin-top: 8.5vh;
        overflow: hidden;
        width: 98.5vw;
    }

     .left-container {
        /* background-color: rgb(179, 185, 97); */
        width: 25vw;
        margin-left: 2.5vw;
        height: 100vh;
        position: fixed;
        border-right: 1px solid rgb(235, 231, 231);
        /* float: left; */
    } 

    .left-container .search {
        margin-top: 10vh;
        margin-left: 2vw;
    }

    .right-container {
        margin-left: 30vw;
        margin-top: 9vh;
        max-width: 73.5vw;
        /* background-color: aqua; */
    }

    ul {
        list-style: none;
    }

    .hotel {
        display: flex;
        /* justify-content: space-around; */
        margin-top: 5vh;
        /* background-color: aqua; */
        width: 64vw;
    }

    ul li {
        margin-top: 3vh;
    }

    #nameHotel {
        font-weight: bolder;
    }

    #bnt {

    }
</style>
