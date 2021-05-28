<template>
    <div class="search-comp">
        <div class="description">
            <h1>
                You will be making a wise business decision when choosing the <span style="color: rgb(248,219,172)">IrtAoh --iah_thna</span>
            </h1>
        </div>
        <form @submit.prevent="handleSearch" method="post">
            <div class="search-form">
                <div class="where">
                    <div class="label">Where are you going?</div>
                    <div class="render">
                        <select v-model="search.cityName" aria-placeholder="Choose here">
                            <option value="" selected disabled hidden>Choose here</option>
                            <option v-for="(option) in listCity" v-bind:key="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="from">
                    <div class="label">From</div>
                    <div class="render">
                        <input type="date" v-model="search.start">
                    </div>
                </div>
                <div class="to">
                    <div class="label">To</div>
                    <div class="render">
                        <input type="date" v-model="search.end">
                    </div>
                </div>
                <div class="guest">
                    <div class="label">Guest</div>
                    <div class="render">
                        <input type="number" min="1" value="1" v-model="search.capacity">
                    </div>
                </div>
                <div class="search">
                    <button type="submit">Search</button>
                </div>
                
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'search-comp',
    data() {
        return {
            listCity: null,
            selected: null,
            search: {
                cityName: "Đà Nẵng", 
                start: null,
                end: null,
                capacity: 1
            }, 
            listSearch: {

            },
        }
    },
    components: {
        
    },
    mounted() {
        this.axios.get('https://hotels-booking-server.herokuapp.com/all-cities')
        .then((response) => {
            this.listCity = response.data
            localStorage.setItem('city', JSON.stringify( this.listCity))
        })
        let today= new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 

    today = yyyy+'-'+mm+'-'+dd;                
    // document.getElementById("idFdate").defaultValue =today+"";
    this.search.start = today;
    this.search.end = yyyy+'-'+mm+'-'+ (dd+1)

    },
    methods: {
        handleSearch() {
            this.axios.post('https://hotels-booking-server.herokuapp.com/search', this.search)
            .then((response) => {
                // console.warn(response.data)
                // localStorage.setItem("listSearch", JSON.stringify(response.data));
                localStorage.setItem("listSearch", JSON.stringify(response.data));
                localStorage.setItem("search", JSON.stringify(this.search));
                this.$router.push('/search/list-hotel');
            })
        }
    },
    
}
</script>

<style scoped>

    .search-comp {
        color: black;
        background-image: url("https://wall.vn/wp-content/uploads/2019/11/hinh-anh-phong-canh-da-lat-1.jpg");
        background-position: center;
        background-size: cover;
        height: 100vh;
        max-width: 100vw;
        /* position: relative; */
    }

    .search-comp .description {
        color: white;
        width: 70vw;
        padding-top: 15vh;
        padding-left: 5vw;
    }

    .search-comp .search-form {
        overflow: hidden;
        width: 55vw;
        margin-top: 13vh;
        margin-left: 42vw;
        background-color: white;
        padding: 3vh 0vw;
        border-radius: 4px;
    }

    .search-comp .search-form .where, .from, .to, .guest, .search {
        float: left;
        margin-left: 2vw;
    }

    .search-comp .search-form select {
        width: 11vw;
        border: 0;
    }

    [type="date"] {
        background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  95% 50% no-repeat ;
        border: 0;
        width: 11vw;
        /* margin-left: -4vw;  */
    }

    [type="date"]::-webkit-inner-spin-button {
        display: none;
    }

    [type="date"]::-webkit-calendar-picker-indicator {
        opacity: 0;
    }

    [type="number"] {
        width: 3vw;
        border: 0;
    }

    [type="button"] {
        width: 6vw;
        text-align: center;
        padding-left: 0.5vw;
        margin-top: 1.5vh;
        height: 2.5vw;
        background-color:  rgb(133, 179, 209);
        border-radius: 4px;
    }

</style>
