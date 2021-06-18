<template>
    <div class="forgot-password">
        <page-loader v-bind:isloaded="isloaded"/>
        <div class="bg">
            <h1 id="first">Welcome Back!</h1>
            <h6>To Keep connect with us plaese login with your personal infor</h6>
            <div class="login-comp">
                <div class="content">
                </div>
                <div class="form">
                    <form v-show="!isSend" @submit.prevent="sendEmail">
                        <h1>FORGOT PASSWORD</h1>
                        <h5>Enter your email address</h5>
                        <input type="text" v-model="email" placeholder="Enter email address" required> <br>
                        <span  v-show="incorrect">Your email is incorrect!!</span>
                        <button type="submit">Continue</button>
                    </form>  
                    <div v-show="isSend" class="sent">
                        <h1>RESET YOUR PASSWORD</h1>
                        <h5 style="margin-top: 8vh"><a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">Check your email to reset your password</a> </h5>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import PageLoader from './PageLoader.vue'

export default {
    name: 'forgot-password',
    data() {
        return {
            email: null,
            isSend: false,
            incorrect: false,
            isloaded: false,

        }
    },
    methods: {
        sendEmail() {
            this.isloaded = true
            this.axios.post(`/forgot-password/${this.email}`)
                .then(response => {
                    if(response.data != 'email does not exist') {
                        this.isSend = true;
                        localStorage.setItem('tokenPassword', response.data)
                    } else {
                        this.incorrect = true;
                    }
                    console.warn(response.data);
                this.isloaded = false

                })
        }
    },
    mounted() {
        this.correct = false;
    },
    components: {
        'page-loader': PageLoader
    }
}
</script>

<style scoped>

    .bg {
        background-image: linear-gradient(rgba(102, 100, 100, 0.7), rgba(30, 30, 31, 0.7)), url("https://demo.themovation.com/bellevue/apartments/wp-content/uploads/sites/11/2018/12/apartment-theme-home-12.jpg");
        background-position: -50vh 45vw;
        background-size: cover;
        height: 100vh;
        padding-top: 15vh; 
        padding-left: 4vw;
    }

    .bg h1 {
        font-weight: lighter;
        letter-spacing: 0.5vw;
        font-size: 3vw;
    }

    .bg h6 {
        letter-spacing: 0.3vw;
        font-weight: lighter;
    }

    .bg .content {
        width: 55%;
        display: flex;
    }

    .login-comp {
        display: flex;
    }


    .login-comp .form{
        margin-top: -8vh;
        background-color: rgb(233, 230, 230);
        padding: 5vh 2.5vw;
        width: 35vw;
        border-radius: 2px;
    }

    .form h1, h5{
        text-align: center;
    }
    .form button, input, span {
        margin: 5vh 3vw;
    }


    [type="text"], [type="password"], [type="date"] {
        border: 0;
        border: 1px solid rgb(163, 161, 161);
        width: 24vw;
        margin-top: 6vh;
        /* margin-bottom: 2vh; */
        background: none;
        padding: 1vh;
        border-radius: 2px;
    }

    button {
        border-radius: 2px;
        border: 1px solid white;
        background-color: rgb(244,54,79);
        color: white;
        padding: 1vh 3.2vh;
        text-align: center;
        width: 24vw;
        margin: 5vh auto;
    }

    #incorrect {
        margin: 1vh auto;
    }
    ::placeholder {
        font-size: 1.1vw;
        font-family: 'Courier New', Courier, monospace;
        letter-spacing: 0.2vw;
    }

    .forgot-password .login-comp .form span {
        color: red;
    }

    a {
        text-decoration: none;
        color: rgb(27, 27, 27)
    }

</style>
