<template>
    <div class="signup">
        <page-loader v-bind:isloaded="isloaded"/>

        <div class="bg">
            <h1 id="first">Welcome Back!</h1>
            <h6>To Keep connect with us plaese login with your personal infor</h6>
            <div class="login-comp">
                <div class="content">
                </div>
                <div class="form">
                    <h1>CREATE NEW ACCOUNT</h1>
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
                    <form @submit.prevent="postDataSignup" method="post">
                
                        <div class="login-form">
                            <div class="full-name">
                                <ul>
                                    <li id="ins">
                                        <i class="fas fa-id-card"></i>
                                    </li>
                                    <li>
                                        <input type="text" v-model="register.userDetail.nameUserDetail" placeholder="full name" required>
                                    </li>
                                    
                                </ul>
                            </div>  
                            
                            <div class="name">
                                <ul>
                                    <li>
                                        <i class="fas fa-user-alt"></i>
                                    </li>
                                    <li>
                                        <input type="text" v-model="register.username" placeholder="username" required>
                                        <span v-show="isUsername">Username is exist</span>

                                    </li>
                                </ul>
                            </div>
                            <div class="email">
                                <ul>
                                    <li>
                                        <i class="fas fa-envelope"></i>
                                    </li>
                                    <li>
                                        <input type="text" v-model="register.email" name="" id="" placeholder="email" required>
                                        <span v-show="isEmail">Email is exsit</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="password">
                                <ul>
                                    <li>
                                        <i class="fas fa-lock"></i>
                                    </li>
                                    <li>
                                        <input type="text" v-model="register.password" name="" id="" placeholder="password" required>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="phonenumber">
                                <ul>
                                    <li>
                                        <i class="fas fa-phone"></i>
                                    </li>
                                    <li>
                                        <input type="text" v-model="register.userDetail.phoneNumber" name="" id="" placeholder="phonenumber" required>
                                    </li>
                                </ul>
                            </div>
                            <div class="birth">
                                <ul>
                                    <li>
                                        <i class="fas fa-calendar"></i>
                                    </li>
                                    <li>
                                        <input type="date" v-model="register.userDetail.birth" name="" id="" placeholder="birthday" required>
                                    </li>
                                </ul>
                            </div>
                            <div class="btn">
                                <button type="submit">SIGN UP</button>
                            </div>
                            <div class="forgot-password">
                                <span style="margin-left: 16vw; color: black">Or</span>
                                <h6><router-link to="/login">You had a account? Go to login</router-link></h6>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Header from './Header.vue'
import PageLoader from './PageLoader.vue'

export default {
    name: 'signup',
    data() {
        return {
            register: {
                username: null,
                password: null,
                email: null,
                role: ['user'],
                userDetail: {
                    nameUserDetail: null,
                    birth: null,
                    phoneNumber: null
                }
            },
            isEmail: false,
            isUsername: false,
            isloaded: false

        }
    },
    methods: {
        postDataSignup() {
            this.isloaded = true
            this.isEmail = false
            this.isUsername = false
            this.axios.post("signup/", this.register)
            .then((response) => {
                console.warn(response.data.message)
                if(response.data.message === 'username is taken') {
                    this.isUsername = true;
                } else if (response.data.message === 'email is taken') {
                    this.isEmail = true
                } else {
                    window.alert('Sign up successfully!!' + '\n' + 'Login?')
                    this.$router.push('/login')
                }
                this.isloaded = false
            })
        }
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
        text-align: center;
        margin-top: -8vh;
        background-color: rgb(233, 230, 230);
        padding: 5vh 2.5vw;
        width: 35vw;
        border-radius: 2px;
    }


    .login-comp h6 {
        margin-bottom: 3vh;
        margin-top: 3vh;
    }

    .login-comp .form h1 {
        color: rgb(43, 42, 41);
        margin-left: 0;
    }

    .login-comp .form ul {
        list-style: none;
    }

    .login-comp .form ul li {
        display: inline;
    }

    .login-comp .form .login-form {
        text-align: left;
        margin-top: 3vh;
    }

    i {
        margin-right: 1vw;
    }

    .icon i {
        font-size: 1.8vw;
        padding: 0.4vw;
        border: 1px solid black;
        border-radius: 50%;
    }

    #google i {
        font-size: 1.6vw;
        padding: 1.2vh 0.3vw 1vh;
    }


    [type="text"], [type="password"], [type="date"] {
        border: 0;
        border: 1px solid rgb(163, 161, 161);
        width: 24vw;
        margin-top: 1vh;
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
        margin: 0.5vh 3.58vw;
        width: 24vw;
    }

    #incorrect {
        margin: 1vh auto;
    }
    ::placeholder {
        font-size: 1.1vw;
        font-family: 'Courier New', Courier, monospace;
        letter-spacing: 0.2vw;
    }

    a {
        text-decoration: none;
        color: rgb(244,54,79);
        margin-left: 4vw;
    }

    span {
        color: rgb(228, 102, 102);
        margin-left: 2.3vw;
        font-size: 1.1vw;
    }


</style>
