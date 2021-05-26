<template>
    <div class="user-comp">
       <header-comp/>
        <home1-comp/>
        
    </div>
</template>

<script>

import Header from './Header.vue'
import Home1 from './Home1.vue'

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
    'header-comp': Header,
    'home1-comp': Home1,
    },


    async created() {
         this.axios.get('https://hotels-booking-server.herokuapp.com/user/', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            console.warn(response.data)
            localStorage.setItem('userName', response.data.userDetail.nameUserDetail)
            var res = localStorage.getItem('userName').split(" ");
            var name = res[res.length -1] 
            localStorage.setItem('login', name);
            localStorage.setItem('signup', 'Logout');
            window.alert(localStorage.getItem('login'));

        })

        this.axios.get('https://hotels-booking-server.herokuapp.com/director/hotel/13/getImg')
        .then((result) => {
            localStorage.setItem('img', result.data[0].img)

            this.imgInf.id = result.data[0].id;
            this.imgInf.image = 'data:image/jpeg;base64,' + localStorage.getItem('img');
        })
    }
}
</script>

<style scoped>
    img {
        height: 15vh;
    }
    
</style>
