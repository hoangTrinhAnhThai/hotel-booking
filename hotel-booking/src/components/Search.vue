<template>
    <div class="search-comp">
        <page-loader v-bind:isloaded="isloaded"/>
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
import PageLoader from './PageLoader.vue'

export default {
    name: 'search-comp',
    data() {
        return {
            listCity: null,
            selected: null,
            search: {
                cityName: null, 
                start: null,
                end: null,
                capacity: 1
            }, 
            listSearch: null,
            isloaded: null
        }
    },
    components: {
        'page-loader': PageLoader
        
    },
    mounted() {
        
        this.$store.dispatch('headerShow', true)
        this.axios.get('all-cities')
        .then((response) => {
            this.listCity = response.data
            localStorage.setItem('city', JSON.stringify( this.listCity))
        })
        let today= new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        
        if(dd<10){
            var ddF='0'+dd;
        } else {
            ddF = dd;
        }
        if(mm<10){
            var mmF = '0'+mm;
        } else {
            
            mmF = mm;
        }
        this.search.start = yyyy +'-'+ mmF +'-' + ddF;
        switch(mm) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: 
                if(dd == 31 && mm == 12) {
                    mm = 1;
                    dd =1;
                    yyyy += 1;
                } else if (dd == 31 && mm !=12) {
                    mm +=1;
                    dd =1; 
                } else {
                    dd +=1;
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if(dd == 30) {
                    mm +=1;
                    dd= 1;
                } else {
                    dd +=1
                }
                break;
            default : 
                if(dd == 28 || dd == 29) {
                    mm +=1;
                    dd = 1
                } else {
                    dd+=1;
                }
        }
        if(dd<10){
             dd='0'+dd;
        }
        if(mm<10){
             mm = '0'+mm;
        } 
        this.search.end = yyyy+'-'+mm+'-'+dd;
        

                    
    // document.getElementById("idFdate").defaultValue =today+"";
    

    },
    methods: {
        handleSearch() {
            this.axios.post('search', this.search)
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
