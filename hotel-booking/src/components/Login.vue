<template>
    <div class="login">
        <!-- <header-comp/> -->
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
                <div class="inc">
                    <!-- <span v-show="incorrect">Your username or password is incorrect!</span> -->
                </div>
                <form @submit.prevent="postDataLogin" method="post">
                    <div class="login-form">
                        <div class="email">
                            <ul>
                                <li>
                                    <i class="fas fa-user"></i>
                                </li>
                                <li>
                                    <input 
                                        type="text" name="username" v-model="loginData.username" required
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
                                    <input type="password" name="password" v-model="loginData.password" required id="">
                                </li>
                            </ul>
                        </div>
                        
                        <div class="forgot-password">
                            <h6><router-link to="/forgot-password">Forgot your password?</router-link></h6>
                        </div>
                        <div class="btn">
                            <button type="submit">Login</button>
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
</div>
   
</template>

<script>
// import Header from './Header.vue'
// import axios from 'axios'

export default {
    name: 'login-comp',
    data() {
        return {
            loginData: {
                username: null,
                password: null,
                incorrect: null
            }
        }
    },
    methods: {
        postDataLogin() {
            this.axios.post("signin/", this.loginData)
            .then((response) => {
                    console.warn(response.data.message)
                if(response.data.message == 'incorrect') {
                    this.incorrect = true;
                    window.alert('incorrect')
                } else {
                    this.$store.dispatch('user', response.data)
                    localStorage.setItem('token', response.data.tokenType + ' '+ response.data.accessToken);
                    localStorage.setItem('nameUser', response.data.userDetail.nameUserDetail)
                    if(response.data.roles[0] == 'ROLE_USER') {
                        this.$router.push('/')
                    } else if(response.data.roles[0] == 'ROLE_DIRECTOR') {
                        // this.$router.go('/director')
                        this.$router.push('/director')
                    } else if (response.data.roles[0] == 'ROLE_ADMIN') {
                        this.$router.push('/admin')
                    } else {
                        console.warn('error')
                    }
                }
                    
                
            })
        }
    },
    components: {
        // 'header-comp' : Header

    },
    async created() {
        this.$store.dispatch('headerShow', true);
        this.incorrect = false;
    }
    
}
</script>

<style scoped>
    
    h1 {
        font-weight: bolder;
    }

    .login-comp {
        width: 55vw;
        height: 58vh;
        position: relative;
        top: 20vh;
        left: 22.5vw;
        border-radius: 8px;
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

    [type="text"], [type="password"]  {
        border: 0;
        border-bottom: 1px solid black;
        width: 28vw;
    }

    button {
        border-radius: 40px;
        border: 1px solid white;
        background-color: rgb(133,176,210);
        color: white;
        padding: 1vh 3.2vh;
        text-align: center;
        margin-left: 15.5vw;
    }

    .forgot-password h6 {
        text-align: center;
    }

    #incorrect {
        margin: 1vh auto;
    }
    
</style>
