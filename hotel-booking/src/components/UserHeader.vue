<template>
    <div class="user-header">
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
                        <div class="name">{{userName}}</div>
                        <div class="since">Since: 3 March</div>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="menu">
                <ul>
                    <li>
                        <i class="	far fa-id-badge"></i>
                        <router-link to="/user/account"> Account</router-link></li>
                    <li>
                        <i class="far fa-clock"></i>
                        <router-link to="/user/booking-history">Booking History</router-link>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="logout">
                <ul>
                    <li>
                        <i class="fas fa-sign-in-alt"></i>
                        <router-link to="/">Log out</router-link>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    name: 'user-header',
    data() {
        return {
            userName: null
        }
    },
    mounted() {
        this.userName = localStorage.getItem('userName')
    }
}
</script>

<style scoped>
    .user-header .logo {
        margin: 5vh ;
        margin-left: 3vw;
    }

    .user-header .infor {
        margin: 4vh 0 5vh;
    }

    .user-header .infor img {
        float: left;
        margin-right: 1.2vw;
        position: relative;
    }

    img {
        height: 10vh;
        width: 10vh;
        border-radius: 50%;
    }

    .user-header .infor #and {
        position: relative;
        top: 1vh;
    }

    .user-header i {
        margin-right: 1vw;
    }

    .user-header a {
        text-decoration: none;
        color: black;
    }

    ul {
        list-style: none;
    }

    .user-header .menu {
        clear: both;
        margin-top: 5vh;
        margin-bottom: 5vh;
    }

    .user-header .menu ul li{
        margin-top: 2vh
    }

</style>
