<template>
    <div class="search-comp">
        <page-loader v-bind:isloaded="isloaded"/>
        <div class="description">
            <h1>
                You will be making a wise business decision when choosing the <span style="color: rgb(248,219,172)">IrtAoh --iah_thna</span>
            
            </h1>
            <div class="line">
                ___ <br>
                <span style="color: rgb(248,219,172)">________________</span> <br>
                ___<br>
            </div>

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
                        
                        <input 
                            type="date" 
                            v-model="search.start"
                            :min="nowDate">
                    </div>
                </div>
                <div class="to">
                    <div class="label">To</div>
                    <div class="render">
                        <input type="date" v-model="search.end" :min="search.start">
                    </div>
                </div>
                <div class="guest">
                    <div class="label">Guest</div>
                    <div class="render">
                        <input type="number" min="1" value="1" v-model="search.capacity">
                    </div>
                </div>
                <div class="search">
                    <button type="submit"><i class='fas fa-search' style='font-size:2vw'></i></button>
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
            isloaded: null,
            nowDate: null
        }
    },
    components: {
        'page-loader': PageLoader
        
    },
    mounted() {
+

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
        this.nowDate = yyyy +'-'+ mmF +'-' + ddF;
        localStorage.setItem('nowDate', this.nowDate)
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
        background-image: linear-gradient(rgba(29, 28, 28, 0.7), rgba(36, 35, 35, 0.7)), url("https://demo.themovation.com/bellevue/apartments/wp-content/uploads/sites/11/2018/12/apartment-theme-home-18.jpg");
        background-color: #232323;
        background-position: bottom center;
        background-size: cover;
        height: 100vh;
        /* position: relative; */
    }

    .search-comp .description {
        color: white;
        text-align: center;
        width: 65vw;
        margin: 0 auto;
        padding-top: 25vh;
        padding-left: 5vw;
    }

    .search-comp .description h1 {
        font-size: 3vw
    }

    .search-comp .description .line {
        font-weight: bolder;
        font-size: 2vw;
        margin-top: -2vh;
        line-height: 1vh;
    }

    .search-comp .search-form {
        overflow: hidden;
        width: 62vw;
        text-align: center;
        margin: 10vh auto;
        border-radius: 4px;
        border: 1px solid grey;
        border-radius: 20px;
    }

    .search-comp .search-form .where, .from, .to, .guest, .search {
        float: left;
        margin-left: 3%;   
        background-color: none;
        padding: 1vh 1vw 2vh;
        text-align: center
    }

    .search-comp .search-form .where, .from, .to, .guest {
        /* padding: 2vh 0; */
    }

    .search-comp .search-form .label {
        font-size: 14px;
        color: rgb(202, 199, 199);
        margin-bottom: 1vh;
    }

    .search-comp .search-form select {
        width: 11vw;
        border: 0;
        background: none;
        color: white;
        font-size: 1rem;

    }

    .search-comp .search-form select option {
        background-color: none;
        color: black;
        font-size: 0.8rem;

    }

    [type="date"] {
        color: white;
        background: url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  95% 50% no-repeat ;
        border: 0;
        width: 8.5rem;
        font-size: 1rem;
    }

    [type="date"]::-webkit-inner-spin-button {
        display: none;
    }

    [type="date"]::-webkit-calendar-picker-indicator {
        opacity: 0;
    }

    [type="number"] {
        color: white;
        background: rgba(34, 34, 34, 0.5);
        width: 3.2vw;
        border: 0;
        font-size: 1rem;

    }

    [type="submit"] {
        border: 0;
        background: none;
        height: 9.2vh;
        width: 5vw;
        color: white;
    }

    [type="submit"]:hover {
        color: rgb(182, 173, 173);
        font-size: 2.2vw;
    }
     

</style>
