<template>
    <div class="signup">
        <!-- <header-comp/> -->
        <div class="login-comp">
        <div class="back">
            <h1 id="first">Welcome</h1>
            <h1> Back!</h1>
            <h6>To Keep connect with us plaese login with your personal infor</h6>
            <span><router-link to="/login">Signin</router-link></span>

        </div>
        <div class="form">
            <h1>Create Account</h1>
            <!-- <div class="icon">
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
            </div> -->
            <h6>Ensure your email for registration</h6>
            <form @submit.prevent="postDataSignup" method="post">
                
                <div class="login-form">
                    <div class="full-name">
                        <ul>
                            <li id="ins">
                                <i class="fas fa-id-card"></i>
                            </li>
                            <li>
                                <input type="text" v-model="fullName.lastName" name="" id="lastName" placeholder="last name" required>
                            </li>
                            <li>
                                <input type="text" v-model="fullName.fisrtName" name="" id="firstName" placeholder="first name" required>
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
                        <button @click="validate" type="submit">SIGN UP</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
// import Header from './Header.vue'

export default {
    name: 'signup',
    data() {
        return {
            fullName: {
                lastName: null,
                firstName: null
            },
            register: {
                username: null,
                password: null,
                email: null,
                role: ['user'],
                userDetail: {
                    // nameUserDetail: this.fullName.firstName + " "  + this.fullName.lastName,
                    nameUserDetail: null,
                    birth: null,
                    phoneNumber: null
                }
            },
            errors: [],

        }
    },
    methods: {
        async postDataSignup() {
            if (this.name && this.age) {
            return true;
        }

        this.errors = [];

        if (!this.register.username) {
            this.errors.push('Name required.');
        }
        if (!this.register.password) {
            this.errors.push('password required.');
        }
            this.register.userDetail.nameUserDetail = this.fullName.lastName + ' ' + this.fullName.firstName;
                this.axios.post("https://hotels-booking-server.herokuapp.com/signup/", this.register)
                .then((response) => {
                    console.warn(response.data)
                    this.$router.push('/login')
                })
            },
        validate() {
          this.isValidationAllowed = true
        }
    },
    computed: {
        validated() {
            return this.isValidationAllowed && !this.searchTerm
    }
  },

}
</script>

<style scoped>
    .login-comp {
        width: 60vw;
        height: 80vh;
        position: relative;
        top: 12vh;
        left: 22.5vw;
        border-radius: 8px;
        box-shadow: 8px 8px 3px grey;
    }
    h1 {
        font-weight: bolder;
    }

    .login-comp .back {
        width: 20vw;
        height: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        background-color: rgb(133,176,210);
        float: left;
        text-align: center;
    }

    .login-comp .back span {
        border-radius: 40px;
        border: 1px solid white;
        background-color: rgb(133,176,210);
        color: white;
        padding: 1vh 1.2vh;
    }

    .login-comp .back span a{
         color: white;
         text-decoration: none;
     }

    .login-comp .back #first {
        margin-top: 17vh;
    }

    .login-comp .back h6 {
        /* width: 15vw; */
        margin: 3vh auto;
        margin-bottom: 5vh;
    }

    .login-comp .back input {
        border-radius: 40px;
        border: 1px solid white;
        background-color: rgb(133,176,210);
        color: white;
        padding: 1vh;
        
    }

    .login-comp .form {
        width: 40vw;
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
        margin-top: 8vh;
    }

    .login-comp .form .login-form .full-name {
        margin-left: -0.65vw;
    }
    .login-comp .form .login-form .full-name #lastName, #firstName {
        width: 15vw;
        /* margin-left: 2.3vw; */
        margin-left: -0.5vw;
    }
    .login-comp .form .login-form .full-name #lastName {
        margin-right: 2.2vw;
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
        border-bottom: 0.5px solid rgb(145, 142, 142);
        width: 31.8vw;
        font-family: 'Courier New', Courier, monospace

    }

    [type="button"], button {
        border-radius: 40px;
        border: 1px solid white;
        background-color: rgb(133,176,210);
        color: white;
        padding: 1vh 1.2vh;
        text-align: center;
        margin-left: 15.5vw;
    }

    ::placeholder {
        font-size: 1.2vw;
        color: rgb(158, 152, 152);
        font-family: 'Courier New', Courier, monospace
    }
    [type="date"] {
        border: 0;
        width: 32vw;
        margin-top: 1.5vh;
        border-bottom: 0.5px solid rgb(145, 142, 142);
    }
</style>
