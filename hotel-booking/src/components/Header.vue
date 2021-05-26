<template>
    <div class="header-comp" :class="{change_color: scrollPosition > 20}" v-show="disableHeader" >
        <div class="logo">
            <router-link to="/">
                <span style="font-size: 30px">IrtAoh</span>
                <span>  --</span>
                <span>iah_thna</span>
            </router-link>
        </div>
        <div class="menu">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <!-- <li>
                    <select class="custom-select" v-model="lang" @change="handleChange($event)">
                        <option value="en">English</option>
                        <option value="vi">Vietnamese</option>
                        <option value="ja">Japanese</option>
                    </select>
                </li> -->
                <span v-if="user">
                    <li id="login"><router-link to="/user/account">Hi, {{user.userDetail.nameUserDetail}}</router-link></li>
                    <li id="signup" ><router-link to="/">Logout</router-link></li>
                </span>
                <span v-if="!user">
                    <li id="login"><router-link to="/login">Login</router-link></li>
                    <li id="signup" ><router-link to="/signup">Signup</router-link></li>
                </span>
                
                
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
export default {
    name: 'header-comp',
    props: ['user'],

    data() {
        return {
            scrollPosition: null,
            name: null, 
            disableHeader: localStorage.getItem('disableHeader')
        }
    }, 
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }

}
</script>

<style scoped>
    .header-comp {
        /* background-color: rgb(133,176,210); */
        font-size: 100%;
        overflow: hidden;
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
        /* margin-left: 55%; */
        margin-top: 2vh;
        float: right;
        margin-right: 2vw;
    }

    .header-comp .menu ul {
        list-style: none;
    }

    .header-comp .menu ul li {
        display: inline;
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
</style>
