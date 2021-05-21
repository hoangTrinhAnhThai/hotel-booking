<template>
    <div class="user-account">
        <div class="container">
            <div class="container1">
                <div class="title">
                    <h1>Account Setting</h1>
                </div>
                <div class="content">
                    <div class="information">
                        <h4>Personal information</h4>
                        <div class="group1">
                            <div class="name">
                            <label for="name">Name</label><br>
                            <input type="text">
                        </div>
                        <div class="email">
                            <label for="email">Email</label><br>
                            <input type="text" name="" id="">
                        </div>
                        <div class="numberphone">
                            <label for="email">Phone</label><br>
                            <input type="text" name="" id="">
                        </div>
                        <div class="birthday">
                            <label for="email">Birthday</label><br>
                            <input type="date">
                        </div>
                        </div>
                        <div class="about-yourself">
                            <label for="about-yourself">About Yourself</label><br>
                            <textarea name="" id="" cols="40" rows="5"></textarea>
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
                    <input type="button" value="SAVE CHANGES">
                    <hr>
                </div>
                <div class="change-password">
                    <div class="current-password">
                        <label for="current">Current Password</label><br>
                        <input type="text" name="" id="">
                    </div>
                    <div class="new-password">
                        <label for="new-password">New Password</label><br>
                        <input type="text" name="" id="">
                    </div>
                    <div class="password-again">
                        <label for="password-again">New Password again</label><br>
                        <input type="text" name="" id="">
                    </div>
                    <div class="saveP">
                        <input type="button" value="SAVE CHANGES">
                        <hr>
                    </div>
                    <!-- <booking-history/> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
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
        width: 48vw;
        display: flex;
        flex-wrap: wrap;
        float: left;
        /* margin-top: 5vh; */
    }

    .about-yourself {
        margin-top: 5px;
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

    .save {
        clear: both;
        margin: 15vh 0 17vh;

    }

    .save input {
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

    .saveP input {
        border-radius: 20px;
        padding: 0.5vh 0.8vw;
        background-color: rgb(114,167,207);
        margin-top: 5vh;
    }
</style>
