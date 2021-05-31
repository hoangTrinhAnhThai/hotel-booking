<template>
    <div class="director-header">
            <div class="logo">
                <router-link to="/">IrtAoh --iah_thna </router-link>
            </div>
            <hr>
            <div class="infor">
                <ul>
                    <li>
                        <img src="https://i.pinimg.com/736x/af/0c/9c/af0c9ceb293e88198bc2f9924952f89c.jpg" alt="">
                    </li>
                    <li id="and">
                        <div class="name">{{directorName}}</div>
                        <div class="since">Since: 3 March</div>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="menu">
                <ul>
                    <li>
                        <i class="	far fa-id-badge"></i>
                        <router-link to="/director/account"> Account</router-link>
                        </li>
                    <li>
                        <i class="fas fa-hotel"></i>
                        <router-link to="/director/booking-history">Hotel</router-link>
                    </li>
                    <li>
                        <i class="fas fa-list"></i>
                        <router-link to="/director/booking-history">Booking list</router-link>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="logout">
                <ul>
                    <li>
                        <i class="fas fa-sign-in-alt"></i>
                        <a href="javascript:void(0)" @click="handelLogoutClick">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    name: 'director-header',
    data() {
        return {
            directorName: localStorage.getItem('nameUser')
        }
    },
    methods: {
        handelLogoutClick() {
            localStorage.removeItem('token')
            this.$store.dispatch('user', null)
            this.$router.push('/')
        }
    },
    async created() {
        this.$store.dispatch('headerShow', false)
    }
}
</script>

<style scoped>
    .director-header .logo {
        margin: 5vh ;
        margin-left: 3vw;
    }

    .director-header .infor {
        margin: 4vh 0 5vh;
    }

    .director-header .infor img {
        float: left;
        margin-right: 1.2vw;
        position: relative;
    }

    img {
        height: 10vh;
        width: 10vh;
        border-radius: 50%;
    }

    .director-header .infor #and {
        position: relative;
        top: 1vh;
    }

    .director-header i {
        margin-right: 1vw;
    }

    .director-header a {
        text-decoration: none;
        color: black;
    }

    ul {
        list-style: none;
    }

    .director-header .menu {
        clear: both;
        margin-top: 5vh;
        margin-bottom: 5vh;
    }

    .director-header .menu ul li{
        margin-top: 2vh
    }

</style>
