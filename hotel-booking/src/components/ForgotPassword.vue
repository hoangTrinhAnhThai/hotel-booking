<template>
    <div class="forgot-password">
        <div class="container">
            <div  class="content">
                <form v-show="!isSend" @submit.prevent="sendEmail">
                    <h1>FORGOT PASSWORD</h1>
                    <h5>Enter your email address</h5>
                    <input type="text" v-model="email" placeholder="Enter email address"> <br>
                    <span v-show="incorrect">Your email is incorrect!!</span>
                    <button type="submit">Continue</button>
                </form>  
                <div v-show="isSend" class="sent">
                    <h1>RESET YOUR PASSWORD</h1>
                    <h5>Check your email to reset your password</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'forgot-password',
    data() {
        return {
            email: null,
            isSend: false,
            incorrect: false,
        }
    },
    methods: {
        sendEmail() {
            this.axios.post(`/forgot-password/${this.email}`)
                .then(response => {
                    if(response.data != 'email does not exist') {
                        this.isSend = true;
                        localStorage.setItem('tokenPassword', response.data)
                    } else {
                        this.correct = true;
                    }
                    console.warn(response.data);
                })
        }
    },
    mounted() {
        this.correct = false;
    }
}
</script>

<style scoped>

    .forgot-password {
        width: 40vw;
        height: 50vh;
        position: relative;
        top: 20vh;
        left: 30vw;
        border-radius: 8px;
        border: 1px solid rgb(211, 207, 207);
        box-shadow: 8px 8px 3px grey;
        text-align: center;
    }

    .forgot-password h1 {
        margin: 5vh auto 1.5vh;
    }

    .forgot-password h5 {
        margin: 0 auto 3vh;
    }

    .forgot-password input, button {
        width: 75%;
        height: 7vh;
        margin: 2vh auto;
        border: 1px solid rgb(175, 173, 173);
        border-radius: 5px;
        padding: 0 1vw;
    }

    .forgot-password button {
        background-color: rgb(133,176,210);
    }

    .sent h5 {
        margin: 10vh auto;
    }

    .forgot-password form span {
        color: red;
        font-weight: bold;
    }
</style>
