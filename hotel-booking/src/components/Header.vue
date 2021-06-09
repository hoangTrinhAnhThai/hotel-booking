<template>
        <div class="header-comp" :class="{change_color: scrollPosition > 20}" v-if="headerShow">
        <div class="logo">
            <router-link to="/">
                <span style="font-size: 30px">IrtAoh</span>
                <span>  --</span>
                <span>iah_thna</span>
            </router-link>
        </div>
        <div class="menu">
            <ul class="main-menu">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <!-- <li>
                    <select class="custom-select" v-model="lang" @change="handleChange($event)">
                        <option value="en">English</option>
                        <option value="vi">Vietnamese</option>
                        <option value="ja">Japanese</option>
                    </select>
                </li> -->
                    <li v-if="user" id="login">Hi, {{nameUser}}
                        <ul class="sub-menu">
                                <li><router-link to="/user/account">Account</router-link></li>
                                <li  style="border-top: 0px"><router-link to="/user/booking-history">Booking History</router-link></li>
                        </ul>
                    </li>
                    <li v-if="user" id="signup" ><a href="javascript:void(0)" @click="handelLogoutClick">Logout</a></li>
                    <li v-if="!user" id="login"><router-link to="/login">Login</router-link></li>
                    <li v-if="!user" id="signup" ><router-link to="/signup">Signup</router-link></li>
                
                <!-- <li id="fb">
                    <i class="fab fa-facebook"></i>
                </li>
                <li id="ins">
                    <i class="fab fa-instagram"></i>
                </li>
                <li id="twitter">
                    <i class="fab fa-twitter"></i>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'header-comp',

    data() {
        return {
            scrollPosition: null,
            nameUser: localStorage.getItem('nameUser')
        }
    }, 
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        handelLogoutClick() {
            localStorage.clear();
            localStorage.removeItem('token')
            this.$store.dispatch('user', null)
            this.$router.push('/')
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        console.error(this.nameUser)
    },
    computed: {
        ...mapGetters(['user']),
        ...mapGetters(['headerShow'])
    }
}
</script>

<style scoped>
    .header-comp {
        font-size: 100%;
        max-width: 100vw;
        position: fixed !important;
        width: 100vw;
    }

    .header-comp .logo {
        float: left;
        margin-left: 4vw;
    }

    .header-comp .logo a {
        color: black;
        text-decoration: none;
    }

    .header-comp .menu {
        margin-top: 2vh;
        float: right;
        margin-right: 2vw;
    }

    .header-comp .menu ul {
        list-style: none;
    }

    .header-comp .menu .main-menu>li {
        display: inline-block;
        margin: 0 3vw;
    }

    .header-comp .menu ul li a {
        color: black;
        text-decoration: none;
    }

    .header-comp .menu ul li:hover {
        border-bottom: 1px solid white;
    }

    #login, #signup {
        border: 1px solid black;
        padding: 4px 10px;
        border-radius: 15px;
    }

    #login:hover, #signup:hover {
        background-color: rgb(83, 145, 185);
    }

    .change_color {
       background-color:rgb(133,176,210);
       position: fixed;
   }

    #login {
        position: relative;
    }
   .menu .sub-menu{
       clear: both;
       
       list-style-type: none;
       position: absolute;
       margin-top: 0.8vh;
       margin-left: -3.4vw;
        width: 12vw;
        font-size: 1.1vw;
        text-align: left;
        display: none;
   }

   .sub-menu li {
       border: 0.1px solid rgb(151, 141, 141);
        background-color: rgb(83, 145, 185);
       padding: 1vh;
       display: block;
   }

   .sub-menu li a {
       color: white;
   }

   #login:hover {
       border-radius: 0;
       border: 0.1px solid rgb(151, 141, 141);
       border-bottom: 0;
       color: white;
   }

   #login:hover .sub-menu{
       display: block;
   }
</style>
