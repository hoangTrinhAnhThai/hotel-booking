<template>
    <div class="infor-home">
        <div class="contain1">
            <h1>
                OUR GUEST HOUSE
                <br> _____
            </h1>
            <div class="content1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint ratione fugiat? Culpa laborum sit possimus repellendus omnis eum veniam debitis, tempora minima ab nisi voluptates fuga corporis quo dolore!
            </div>
            <div class="content2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ratione sit expedita officia iusto dignissimos, nobis quam pariatur eos, quidem repellat esse, nam repellendus. Dignissimos officiis perspiciatis ad cumque consectetur.
            </div>
        </div>
        <div class=contain2>
            <h1>SELECT HOTEL</h1>
            <h5>Hotel for traveller</h5>
            <carousel >
                <slide v-for="i in images" :key="i.id">
                    <img :src="i"/>
                </slide>
        </carousel>
        </div>
        <div class="contain3">
            <div class="content">
                <div class="sub-contain1">

                </div>
                <div class="sub-contain2">

                </div>
                <div class="sub-contain3">
                    
                </div>
            </div>
        </div>
        
        <!-- <div class="contain1">
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
    </div> -->
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'infor-home',
    data() {
        return {
            images: [
                'https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2020/05/26/decor-homestay-vung-tau-6-1756.jpg',
                'https://kenhhomestay.com/wp-content/uploads/2019/04/Shop-decor-homestay-11.jpg',
                'https://i.pinimg.com/originals/7e/17/ae/7e17ae883202d815aecc3f2a514842b0.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YaqP42x9vX5NFIEGSXj7jdZc21WuECVcrw&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Mio_PbV_E2gDVUlS4wYQfPYTIT-Bror0_w&usqp=CAU'
            ]
        }
    },
    components: {
        Carousel,
        Slide
    }
};
</script>

<style scoped>
.infor-home {
  margin-top: 10vh;
}

/*  .infor-home .contain1 h1 {
  margin-left: 5.2vw;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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
} */

.contain1 {
    width: 60%;
    margin: 0 auto;
    text-align: center;
}

.contain1 .content1 {
    margin: 5vh 0;
    font-size: 1.2rem;
    color: gray;
}
.contain1 .content2 {
    color: grey;
}

.contain2 {
    width: 90%;
    height: 88vh;
    margin: 10vh auto;
    background-color: rgb(212, 205, 205);
    text-align: center;
}

.contain2 h1 {
    font-size: 3.5vw;
    font-weight: lighter;
    letter-spacing: 0.8vw;
    padding-top: 3vh;
}
.contain2 h5 {
    font-weight: lighter;
    letter-spacing: 0.3vw;
    color: rgb(180,147,76);
}

.contain2 img {
    width: 40vw;
    height: 54vh;
    padding-top: 3vh;
    /* margin-left: 2.5vw; */
}
</style>
