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
                    <li v-if="user" id="loginS">Hi, {{nameUser}}
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
        this.nameUser =localStorage.getItem('nameUser')
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

    .header-comp a {
        color: white;
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
        color: white;
        text-decoration: none;
    }

    .header-comp .menu ul li::after {
        content: '';
        width: 0px;
        height: 1px;
        display: block;
        background: white;
        transition: 300ms;
    }

    .change_color .menu ul li::after {
        content: '';
        width: 0px;
        height: 1px;
        display: block;
        background: black;
        transition: 300ms;
    }

    .header-comp .menu ul li:hover::after {
        width: 100%;
    }

    #login, #signup, #loginS {
        color: white;
        border: 1px solid white;
        padding: 4px 10px;
        border-radius: 15px;
    }

    #login:hover, #signup:hover {
        background-color: rgb(63, 62, 62);
    }

    .change_color #login:hover, .change_color #signup:hover {
        background-color: rgb(207, 204, 204);
    }

    .change_color {
        color: white;
       background-color:white;
       position: fixed;
   }

   .change_color a, .change_color .menu ul li a {
       color: black;
   }

   .change_color .menu ul #signup, .change_color .menu ul #login, .change_color .menu ul #loginS {
       color: black;
       border: 1px solid black;
   }

    #loginS {
        padding: 0.8vh 0.5vw;
        position: relative;
    }
   .menu .sub-menu{
       clear: both;
       list-style-type: none;
       position: absolute;
       margin-top: 0.8vh;
       margin-left: -3.15vw;
        width: 12vw;
        font-size: 1.1vw;
        text-align: left;
        display: none;
   }

   .sub-menu li {
       border: 0.1px solid rgb(151, 141, 141);
        background-color: black;
       padding: 1vh;
       display: block;
   }

   .sub-menu li a {
       color: white;
   }

   #loginS:hover {

       border-radius: 0;
       /* border: 0.1px solid rgb(151, 141, 141); */
       border-bottom: 0;
       color: white;
   }

   #loginS:hover .sub-menu{
       display: block;
   }
</style>
