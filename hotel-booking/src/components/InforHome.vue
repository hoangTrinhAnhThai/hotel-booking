<template>
    <div class="infor-home">
        <div class="contain1">
        <h1>Popular Package --</h1>
        <div class="contain">
            <div class="sub-contain1">
                <img src="https://d3jyiu4jpn0ihr.cloudfront.net/wp-content/uploads/sites/6/20190912103855/ve-may-bay-buon-ma-thuot-ha-noi.jpg" alt="">
                <div class="title">HA NOI</div>
    
            </div>
            <div class="sub-contain1">
                <img src="https://www.tugo.com.vn/wp-content/uploads/7d-18903675-4265-4c48-a6dd-e1c2d13bb7e2.jpg" alt="">
                <div class="title">DA NANG</div>
    
            </div>
            <div class="sub-contain1">
                <img src="https://vietjet.net/includes/uploads/2018/01/ve-may-bay-dong-hoi-sai-gon-600x376.png" alt="">
                <div class="title">HO CHI MINH</div>
    
            </div>
        </div>
    </div>
    <div class="contain2">
        <div class="whynot">
            <div class="content">
                <h1>WHY US?</h1>
                <h6>We make all the process easy</h6>
            </div>
            <div class="img"></div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.infor-home .contain1 h1 {
    margin-left: 5.2vw;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-bottom: 7vh;
}

.infor-home .contain {
    display: flex;
    justify-content: space-around;
    color: black;
}
.infor-home .sub-contain1 {
    position: relative;
}

.infor-home img {
    width: 22vw;
    height: 18vw;
    opacity: 0.8;
}

.infor-home .sub-contain1:hover {
    color: white;
}

.infor-home img:hover {
    opacity: 1;

}

.infor-home .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
    font-weight: bolder;
}

.contain2 {
    margin-top: 10vh;
    
}
</style>
