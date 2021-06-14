<template>
    <div class="user-account">
        <page-loader v-bind:isloaded="isloaded"/>

        <user-header/>
        <div class="container">
            <div class="container1">
                <div class="title">
                    <h1>Account Setting</h1>
                </div>
                <form @submit.prevent="changeInf" method="post">
                    <div class="content">
                        <div class="information">
                            <h4>Personal information</h4>
                            <div class="group1">
                                <div class="name">
                                    <label for="name">Name</label><br>
                                    <input type="text" v-model="user.userDetail.nameUserDetail">
                                </div>
                                <div class="numberphone">
                                    <label for="email">Phone</label><br>
                                    <input type="text" name="" id="" v-model="user.userDetail.phoneNumber">
                                </div>
                                <div class="birthday">
                                    <label for="email">Birthday</label><br>
                                    <input type="date" v-model="user.userDetail.birth">
                                </div>
                            </div>
                        </div>
                        <div class="avt">
                            <ul>
                                <li>
                                    <img src="https://i.pinimg.com/736x/af/0c/9c/af0c9ceb293e88198bc2f9924952f89c.jpg" alt="">
                                </li>
                                <li id="text">
                                    <span>Change your avatar</span><br>
                                    <span>JPN or PNG</span>
                                </li>
                                <li>
                                    <input type="file">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="save">
                        <button type="submit">SAVE CHANGES</button>
                        <hr>
                    </div>
                </form>
                <form @submit.prevent="changePassword" method="post">
                    <div class="change-password">
                        <div class="current-password">
                            <label for="current">Current Password</label><br>
                            <input type="password" name="" id="" v-model="password.oldPassword">
                        </div>
                        <div class="new-password">
                            <label for="new-password">New Password</label><br>
                            <input type="password" name="" id="" v-model="password.newPasswordAgain">
                        </div>
                        <div class="password-again">
                            <label for="password-again">New Password again</label><br>
                            <input type="password" name="" id="" v-model="password.newPassword">
                        </div>
                        <div class="saveP">
                            <button type="submit">SAVE CHANGES</button>
                            <hr>
                        </div>
                        <!-- <booking-history/> -->
                    </div>
                </form>
                
            </div>
        </div>
    </div>
</template>

<script>
import UserHeader from './UserHeader.vue'
import {mapGetters} from 'vuex'
import PageLoader from './PageLoader.vue'

export default {
    name: 'user-account',
    data() {
        return {
            user: {
                userDetail: {
                    birth: null,
                    nameUserDetail: null,
                    phoneNumber: null
                }
            },
            password: {
                oldPassword: null,
                newPasswordAgain: null,
                newPassword: null
            },
            isloaded: null
        }
    },
    components: {
        'user-header': UserHeader
    },
    async created() {
        this.$store.dispatch('headerShow', false)
        this.axios.get('user/', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            console.warn(response.data)
            this.user.userDetail.nameUserDetail = response.data.userDetail.nameUserDetail;
            this.user.userDetail.birth = response.data.userDetail.birth;
            this.user.userDetail.phoneNumber = response.data.userDetail.phoneNumber;
        })
    }, 
    methods: {
        changeInf() {
            this.isloaded = true
            this.axios.post('update-information/save', this.user.userDetail, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((result) => {
                console.warn(result.data)
                window.alert("successfully")
                this.isloaded = false

            })
            .catch((error) => {
                this.isloaded = false
                window.alert("Error")
                console.warn(error)
            })
            localStorage.setItem('disableHeader', false);
        }, 
        changePassword() {
            this.isloaded = true
            if(this.password.newPasswordAgain == this.password.newPassword) {
                this.axios.post('update-information/save-password', this.password, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                .then((result) => {
                    console.warn(result.data.message);
                    window.alert(result.data.message);
                    if(result.data == 'change password successfully') {
                        window.alert(result.data.message);
                    } else {
                        window.alert(result.data.message);
                    }
                    this.isloaded = false
                })
            } else {
                this.isloaded = false
                window.alert("new password is wrong");
            }
            
        }
    },
    mounted: {
        ...mapGetters(['user'])
    },
    comments: {
        'page-loader': PageLoader

    }
}
</script>

<style scoped>
    
    .user-header {
        float: left;
        width: 20vw;
        height: 100vh;
        background-color: rgb(114,167,207);
        position: fixed;
    }
    
    .user-account .container {
        width: 74vw;
        position: absolute;
        left: 24vw;
    }

    .title h1 {
        margin: 5vh 0;
    }

    img {
        height: 10vh;
        width: 10vh;
        border-radius: 50%;
    }

    .information h4 {
        margin: 5vh 0 7vh;
    }

    .information .name, .numberphone {
        /* float: left; */
        margin: 0 5vw 5vh 0;
    }

    .information .group1 input {
        width: 17vw;
    }

    .group1 {
        width: 70vw;
        display: flex;
        flex-wrap: wrap;
        float: left;
        margin-bottom: 4vh;
    }

    label {
        font-weight: 700;
        margin-left: 0.3vw;
    }

    input, textarea {
        border: 0.5px solid rgb(179, 177, 177);
    }

    .avt {
        clear: both;
        margin-top: 10vh;
        margin-left: -2.5vw;
    }

    .avt ul li {
        display: inline;
        float: left;
    }

    .avt #text {
        margin: 1.2vh 2vw;
    }

    [type="file"] {
        margin-top: 2.5vh;
        margin-left: 2.8vw;
    }

    .save {
        clear: both;
        margin: 15vh 0 17vh;

    }

    button {
        border-radius: 20px;
        padding: 0.5vh 0.8vw;
        background-color: rgb(114,167,207);
    }

    hr {
        color: black;
    }

    .change-password {
        margin-top: -5vh;
    }

    .change-password div {
        float: left;
        margin-right: 5.5vw;
        /* margin-bottom: 50vh; */
    }

    .change-password input {
        width: 17vw;
    }

    .saveP button {
        border-radius: 20px;
        padding: 0.5vh 0.8vw;
        background-color: rgb(114,167,207);
        margin-top: 5vh;
    }
</style>
