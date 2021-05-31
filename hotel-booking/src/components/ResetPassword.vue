<template>
    <div class="reset-password">
        <div class="container">
            <div  class="content">
                <form @submit.prevent="newPasswordF">
                    <h1>RESET PASSWORD</h1>
                    <h5>Enter your new password</h5>
                    <input type="text" required v-model="newPassword" placeholder="Enter your new password"> <br>
                    <input type="text" required v-model="newPasswordAgain" placeholder="Enter your new password again"> <br>
                    <span v-show="incorrect">Your email is incorrect!!</span>
                    <button type="submit">Continue</button>
                </form>  
                
            </div>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style scoped>
.reset-password {
        width: 40vw;
        height: 58vh;
        position: relative;
        top: 20vh;
        left: 30vw;
        border-radius: 8px;
        border: 1px solid rgb(211, 207, 207);
        box-shadow: 8px 8px 3px grey;
        text-align: center;
    }

    .reset-password h1 {
        margin: 5vh auto 1.5vh;
    }

    .reset-password h5 {
        margin: 0 auto 3vh;
    }

    .reset-password input, button {
        width: 75%;
        height: 7vh;
        margin: 2vh auto;
        border: 1px solid rgb(175, 173, 173);
        border-radius: 5px;
        padding: 0 1vw;
    }

    .reset-password button {
        background-color: rgb(133,176,210);
    }

    .reset-password form span {
        color: red;
        font-weight: bold;
    }

</style>
