<template>
    <div class="login-comp">
        <div class="form">
            <h1>Sign In to IrtAoh</h1>
            <div class="icon">
                <ul>
                    <li id="fb">
                        <i class="fab fa-facebook"></i>
                    </li>
                    <li id="google">
                        <i class="fab fa-google-plus"></i>
                    </li>
                    <li id="ins">
                        <i class="fab fa-instagram"></i>
                    </li>
                </ul>
            </div>
            <h6>Ensure your email for registration</h6>
            <form action="https://hotels-booking-server.herokuapp.com" v-on:submit="handelSubmitForm">
                <div class="login-form">
                    <div class="email">
                        <ul>
                            <li>
                                <i class="fas fa-user"></i>
                            </li>
                            <li>
                                <input 
                                    type="text" name="username"
                                />
                            </li>
                        </ul>
                    </div>
                    <div class="password">
                        <ul>
                            <li>
                                <i class="fas fa-lock"></i>
                            </li>
                            <li>
                                <input type="password" name="password" id="">
                            </li>
                        </ul>
                    </div>
                    <div class="forgot-password">
                        <h6>Forgot your password?</h6>
                    </div>
                    <div class="btn">
                        <input type="submit" value="SIGN IN">
                    </div>
                </div>
            </form>
        </div>
        <div class="back">
            <h1 id="first">Hello, Friends</h1>
            <h6>Enter your personal details and start joumay with us</h6>
            <span><router-link to="/signup">Signup</router-link></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login-comp',
    data() {
        return {
            details: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        handelSubmitForm(e) {
            console.log(e);
        } 
    }
    // mounted() {
    // this.$store.commit("setErrors", {});
//   },
}
</script>

<style scoped>
    .login-comp {
        width: 55vw;
        height: 58vh;
        position: relative;
        top: 20vh;
        left: 22.5vw;
        border-radius: 8px;
        /* border: 1px solid grey; */
        box-shadow: 8px 8px 3px grey;
    }

    .login-comp .back {
        width: 18vw;
        height: 100%;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: rgb(133,176,210);
        float: left;
        text-align: center;
    }

    .login-comp .back #first {
        margin-top: 3vh;
    }

    .login-comp .back h6 {
        width: 13vw;
        margin: 3vh auto;
        margin-bottom: 5vh;
    }

    .login-comp .back span {
        border-radius: 40px;
        border: 1px solid white;
        background-color: rgb(133,176,210);
        color: white;
        padding: 1vh;
    }
    .login-comp .back span a{
         color: white;
         text-decoration: none;
     }

    .login-comp .form {
        width: 37vw;
        height: 100%;
        float: left;
        text-align: center;
        margin-top: 2vh;
    }

    .login-comp .form h1 {
        color: rgb(133,176,210);
    }

    .login-comp .form ul {
        list-style: none;
    }

    .login-comp .form ul li {
        display: inline;
    }

    .login-comp .form .login-form {
        text-align: left;
        margin-top: 5vh;
    }

    i {
        margin-right: 1vw;
    }

    .icon i {
        font-size: 1.8vw;
        padding: 0.4vw;
        /* margin: 0vh 0.5vw; */
        border: 1px solid black;
        border-radius: 50%;
    }

    #google i {
        font-size: 1.6vw;
        padding: 1.2vh 0.3vw 1vh;
    }

    #ins i {
        padding: 0.9vh 0.55vw;
    }

    [type="text"]  {
        border: 0;
        border-bottom: 1px solid black;
        width: 28vw;
    }

    .btn [type="button"] {
        border-radius: 40px;
        border: 1px solid white;
        background-color: rgb(133,176,210);
        color: white;
        padding: 1vh 1.2vh;
        text-align: center;
        margin-left: 15.5vw;
    }

    .forgot-password h6 {
        text-align: center;
    }

    
</style>
