<template>
    <div class="search-list-hotel">
            <div class="left-container">
                <div class="search">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident alias corporis ab quasi quaerat veritatis perferendis ex non amet distinctio, sit commodi vel totam! Rerum provident accusamus cupiditate et.
                </div>
            </div>
            <div class="right-container">
                <h1>Cac khu vuc lan can</h1>
                <div class="hotel-list">
                    <ul class="hotel" v-for="item in listHotel" v-bind:key="item.id">
                        <li id="imgHotel">
                            <img :src="infImg.img">
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
                            <button type="submit">View rooms</button>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'search-list-hotel',
    data() {
        return {
            listHotel: JSON.parse(localStorage.getItem("listSearch")),
            
            infImg: {
                id: null,
                img: null,
            }
        }
    },
    components: {
        // "header-comp": Header,
    },
    mounted () {
        this.axios.get('https://hotels-booking-server.herokuapp.com/list-hotel/13')
        .then((response)=> {
            this.infImg.img = 'data:image/jpeg;base64,' + response.data.images[0].img;
            console.warn(JSON.parse(this.listHotel)[0].hotel.name)
        })
        
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
        padding-top: 18vh;
        border-right: 1px solid rgb(235, 231, 231);
    } 

    .left-container .search {
        margin-left: 2vw;
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

    .hotel {
        display: flex;
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
