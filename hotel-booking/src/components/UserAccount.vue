<template>
    <div class="user-account">
        <page-loader v-bind:isloaded="isloaded"/>
        <!-- <user-header/> -->
        <div class="contain">
            <div class="inf">
            <div class="img">
                <form @submit.prevent="changeAvt">
                    <img v-if="!url" :src="`data:image/jpeg;base64,${user.avt}`" />
                    <img v-if="url" :src="url" />
                    <div class="capnhat">
                         <span 
                            v-on:click="handleClickInputFile"
                            class="avatar">Change avatar
                        </span>
                        <input type="file" 
                            @change="onFileChange" 
                            ref="fileInputAvt"
                            style="display: none"/>
                        <button v-if="url" type="submit">Save avt</button>
                    </div>
                </form>
            </div>
            <div class="taikhoan">
                <span v-if="user.role == 'ROLE_USER'">Tai khoan nguoi dung</span> <br>
                <span v-if="user.role == 'ROLE_DIRECTOR'">Tai khoan chu khach san</span> <br>
                <span v-if="user.role == 'ROLE_ADMIN'">Tai khoan quan tri vien</span> <br>
                <span v-if="!user.locked">Tai khoan da duoc duyet</span> <br>
                <span v-if="user.locked">Tai khoan chua duoc duyet</span>

            </div>
        </div>
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
                                    <label for="name">Name</label>
                                    <input type="text" v-model="user.userDetail.nameUserDetail">
                                </div>
                                <div class="numberphone">
                                    <label for="email">Phone</label>
                                    <input type="text" name="" id="" v-model="user.userDetail.phoneNumber">
                                </div>
                                <div class="birthday">
                                    <label for="email">Birthday</label>
                                    <input type="date" v-model="user.userDetail.birth">
                                </div>
                            </div>
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
                    </div>
                </form>
                
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import PageLoader from './PageLoader.vue'

export default {
    name: 'user-account',
    data() {
        return {
            user: {
                id: null,
                locked: null,
                role: null,
                username: null,
                avt: null,
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
            isloaded: false,
            url: null,
            avt: null
        }
    },
    components: {
        // 'user-header': UserHeader
        'page-loader': PageLoader
    },
    async created() {
        this.isloaded = true;
        console.warn('bat dau')
        this.axios.get('user/', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            console.warn(response.data)
            this.user.avt = response.data.userDetail.avatar;
            this.user.id = response.data.id;
            this.user.locked = response.data.locked;
            this.user.role = response.data.roles[0].name
            console.warn(this.user.role)
            this.user.userDetail.nameUserDetail = response.data.userDetail.nameUserDetail;
            this.user.userDetail.birth = response.data.userDetail.birth;
            this.user.userDetail.phoneNumber = response.data.userDetail.phoneNumber;
            this.isloaded = false
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
            
        },
        handleClickInputFile() {
            this.$refs.fileInputAvt.click()
        },
        onFileChange(e) {
            this.avt = e.target.files[0];
            console.warn(this.avt)
            this.url = URL.createObjectURL(this.avt);
            console.warn(this.url)
        },
        changeAvt() {
            this.isloaded = true;
            const formData = new FormData();
            formData.append('avatar', this.avt)
            this.axios.post('change-avatar', formData, {
                headers: {
                        'Content-Type': 'multipart/form-data'
                },
            })
            .then((response) => {
                    console.warn(response);
                    this.isloaded = false
            })
            .catch(( error) => {
                    console.error(error)
                    this.isloaded = false
            })
        },
    },
    mounted: {
        ...mapGetters(['user'])
    },
}
</script>

<style scoped>
    
    .user-account {
        /* margin-top: 5vh; */
        height: 10vh;
        background-color: rgba(17, 17, 17, 0.7);
    }

    .contain {
        padding-top: 15vh;
        display: flex;
        width: 85%;
        margin: 0 auto;
    }

    .user-account .inf {
        padding: 5vh 2vw;
        flex-basis: 30%;
        border-radius: 10px;
        border: 1px solid rgb(201, 198, 198);
        height: 85vh;
    }

    .inf .img {
        width: 12.5vw;
        margin: 0 auto;
        text-align: center;
    }

    .inf img {
        margin: 2vh auto;
        width: 10vw;
        height: 23vh;
        border-radius: 50%;
    }
    
    
    .user-account .container {
        width: 70vw;
        margin-left: 3vw;
    }

    .avt img {
        height: 20vh;
        width: 17vh;
    }

    .information h4 {
        margin: 5vh 0 5vh;
    }

    .information .group1 div {
        margin-top: 4vh;
    }

    [type="text"], [type="date"] {
        width: 25vw;
    }

    label {
        font-weight: 700;
        width: 15vw;
    }

    input, textarea {
        border: 0.5px solid rgb(179, 177, 177);
    }


    .save {
        clear: both;
        margin: 5vh 0 7vh;
    }

    button {
        border-radius: 2px;
        padding: 0.5vh 0.8vw;
        background-color: rgb(244,54,79);
    }

    hr {
        color: black;
    }

    .change-password div {
        float: left;
        margin-right: 3vw;
    }

    .change-password input {
        width: 14vw;
    }

    .saveP button {
        border-radius: 2px;
        padding: 0.5vh 0.8vw;
        background-color: rgb(244,54,79);
        margin-top: 5vh;
    }

    #preview {
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        /* border-color: aquamarine; */
        height: 25vh;
        width: 15vw;
    }

    #preview img {
        max-width: 100%;
        max-height: 500px;
    }

    .capnhat span {
        text-align: center;
        color: blue;
    }

    .capnhat button {
        background-color: black;
        color: white;
        margin-top: 1vh;
        margin-bottom: 3vh;
    }

    .taikhoan {
        margin-top: 5vh;
    }
</style>
