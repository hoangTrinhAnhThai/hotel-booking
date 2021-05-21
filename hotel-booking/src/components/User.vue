<template>
    <div class="user-comp">
        <!-- <header-comp v-bind:login="login" v-bind:signup="signup" v-bind:signupRouter="signupRouter" v-bind:loginRouter="loginRouter" /> -->
        <home1-comp />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque dolore repellat tempora quo non, error molestiae ex, velit saepe illum porro est! Quia aperiam, quisquam asperiores consequatur voluptas ullam?
        <!-- <user-header/> -->
        <!-- <user-account/> -->
        <!-- <router-view/> -->
        <img :src="imgInf.image">
    </div>
</template>

<script>

// import Header from './Header.vue'
import Home1 from './Home1.vue'

// import BookingHistory from './BookingHistory.vue'
// import UserHeader from './UserHeader.vue' 
// import UserAccount from './UserAccount.vue'
// import axios from 'axios'

export default {
    name: 'User',
    data() {
        return {
            login: 'Thai',
            signup: 'Logout',
            loginRouter: '/login',
            signupRouter: '/signup',
            imgInf: {
                id: null,
                image: "" 
            },
            user: {
                "username": null,
                "password": null,
                "email": null,
                "nameUserDetail": null,
                "birth": null,
                "phoneNumber": null
            }
        }
    },
    components: {
    // 'header-comp': Header,
    'home1-comp': Home1,

        // 'booking-history': BookingHistory
        // 'user-header': UserHeader,
        // 'user-account': UserAccount
    },
    // async created() {
    //     this.axios.get('https://hotels-booking-server.herokuapp.com/user/', {
    //         headers: {
    //             Authorization: localStorage.getItem('token')
    //         }
    //     })
    //     .then((result) => {
    //         this.login = result.data.userDetails.nameUserDetail;
    //         this.signup = 'Logout'
    //         this.loginRouter = '/user/account'
    //         this.signupRouter = '/'
    //     })
    // }

    async created() {
        this.axios.get('https://hotels-booking-server.herokuapp.com/director/hotel/13/getImg')
        .then((result) => {
            console.warn(result.data[0])
            localStorage.setItem('img', result.data[0].img)
            console.warn("img:"+ localStorage.getItem('img'))

            this.imgInf.id = result.data[0].id;
            this.imgInf.image = 'data:image/jpeg;base64,' + localStorage.getItem('img');
            console.warn("tui qua met moi: " + this.imgInf.image);
        })
    }
}
</script>

<style scoped>
    img {
        height: 15vh;
    }
    .user-header {
        float: left;
        width: 20vw;
        height: 100vh;
        background-color: rgb(114,167,207);
        position: fixed;
    }
    
    .user-account {
         width: 74vw;
        position: absolute;
        left: 24vw;
    }
</style>
