<template>
    <div class="reset-password">
        <page-loader v-bind:isloaded="isloaded"/>
    <div class="bg">
      <h1 id="first">Hello, Friends</h1>
      <h6>Enter your personal details and start joumay with us</h6>

      <div class="login-comp">
        <div class="content"></div>
        <div class="form">
          <h1>Reset password</h1>
          <h6>Ensure your email for registration</h6>
          <div class="inc">
            <!-- <span v-show="incorrect">Your username or password is incorrect!</span> -->
          </div>
          <form @submit.prevent="newPasswordF" method="post">
            <div class="login-form">
              <div class="username">
                <ul>
                  <li>
                    <i class="fas fa-user"></i>
                  </li>
                  <li>
                    <input type="text" required v-model="newPassword" placeholder="Enter your new password"> <br>
                  </li>
                </ul>
              </div>
              <div class="password">
                <ul>
                  <li>
                    <i class="fas fa-lock"></i>
                  </li>
                  <li>
                    <input type="text" required v-model="newPasswordAgain" placeholder="Enter your new password again"> <br>
                  </li>
                </ul>
              </div>
              <span v-show="incorrect"
                >Username or password is incorrect!!</span
              >

              <div class="btn">
                <button type="submit">Confirm password</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import PageLoader from './PageLoader.vue'

export default {
    name: 'reset-password',
    data() {
        return {
            tokenPassword: null,
            newPassword: null,
            newPasswordAgain: null,
            incorrect: false
        }
    },
    methods: {
        newPasswordF() {
            if(this.newPassword == this.newPasswordAgain) {
                this.axios.post(`confirm-reset/${this.tokenPassword}?password=${this.newPassword}`)
                .then((response) => {
                    window.alert(response.data.message)
                })
            } else {
                this.incorrect = true;
            }
        }
    },
    async created() {
        this.tokenPassword = localStorage.getItem('tokenPassword');
        this.incorrect = false;
    },
    components: {
        'page-loader': PageLoader
    }
}
</script>

<style scoped>

.reset-password {
    min-height: 100vh
}

.bg {
  background-image: linear-gradient(
      rgba(102, 100, 100, 0.7),
      rgba(30, 30, 31, 0.7)
    ),
    url("https://demo.themovation.com/bellevue/apartments/wp-content/uploads/sites/11/2018/12/apartment-theme-home-12.jpg");
  background-position: -50vh 45.5vw;
  background-size: cover;
  height: 100vh;
  padding-top: 15vh;
  padding-left: 4vw;
}

.bg h1 {
  font-weight: lighter;
  letter-spacing: 0.5vw;
  font-size: 2.5vw;
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

.login-comp .form {
  text-align: center;
  margin-top: -8vh;
  background-color: rgba(233, 230, 230,.7);
  padding: 5vh 2.5vw;
  width: 35vw;
  border-radius: 10px;
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
  font-size: 1.4vw;
  padding: 0.4vw;
  border: 1px solid black;
  border-radius: 50%;
}
/* 
#google i {
  font-size: 1.6vw;
  padding: 1.2vh 0.3vw 1vh;
} */

#ins i {
  padding: 0.9vh 0.55vw;
}

[type="text"],
[type="password"] {
  border: 0;
  border: 1px solid rgb(163, 161, 161);
  width: 24vw;
  margin-top: 3vh;
  background: none;
  padding: 1vh;
  border-radius: 2px;
}

button {
  border-radius: 2px;
  border: 1px solid white;
  background-color: rgb(244, 54, 79);
  color: white;
  padding: 1vh 3.2vh;
  text-align: center;
  margin: 2vh 3.58vw;
  width: 24vw;
}

.forgot-password h6 {
  text-align: center;
}

#incorrect {
  margin: 1vh auto;
}
::placeholder {
  font-size: 1.1vw;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 0.2vw;
}

.login-form span {
  color: red;
  font-size: 1.1vw;
  margin-left: 7.5vw;
  /* margin-bottom: 5vh; */
}

a {
  text-decoration: none;
  color: rgb(244, 54, 79);
  margin-left: 4vw;
}
</style>
