<template>
    <div class="view-room-search">
        <page-loader v-bind:isloaded="isloaded"/>
        <div class="img-hotel">
            <div class="room" >
                    <div class="htel" v-if="hotel">
                        <ul>
                            <li>
                            <h4>{{hotel.name}}</h4>
                        </li>
                        <li>
                            <h6>{{hotel.address.street}}, {{hotel.address.city}}</h6>
                        </li>
                        <li>
                            <div class="img">
                                <div class="img2">
                                    
                                    <img 
                                        style="border-top-left-radius: 15px; border-bottom-left-radius: 15px" 
                                        src="https://res.cloudinary.com/spacejoy/w_800/v1585045500/blog/article/5e79df773b09900028907d20/5e79dffc3b09900028907d22.jpg" alt="">
                                </div>
                                <div class="img2">
                                    <div class="img4">
                                        <div class="img4-1">
                                            <img src="https://res.cloudinary.com/spacejoy/w_800/v1585045500/blog/article/5e79df773b09900028907d20/5e79dffc3b09900028907d22.jpg" alt="">
                                            <img
                                                style="border-top-right-radius: 15px" 
                                                src="https://res.cloudinary.com/spacejoy/w_800/v1585045500/blog/article/5e79df773b09900028907d20/5e79dffc3b09900028907d22.jpg" alt="">
                                        </div>
                                        <div class="img4-2">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO579fxZrPbMTnXkboSTp512QdkMa--JsxYEog9HJVWAw3P4cXw_DpioxPf3IBlDeKUQg&usqp=CAU" alt="">
                                            <img 
                                                style="border-bottom-right-radius: 15px" 
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpkYg1zz3HDe9JfM6qIP7IHMmj4PNUPJZhA&usqp=CAU" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        </ul>
                        <div class="content">
                            <div v-if="hotel.rooms" class="phongtrong">
                                <h2>Phong trong</h2>
                                <div v-for="(i, index) in hotel.rooms" v-bind:key="i.id" class="showphong">
                                    <div class="img">
                                        <img :src="currentImg(index)">
                                        <br>
                                        <button id="prev" class="prev" @click="prev">&#10094;</button> 
                                        <button id="next" class="next" @click="next">&#10095;</button>  
                                    </div>
                                    <div class="infor">
                                        <h3>{{i.name}}</h3>
                                        <h6>Loại phòng: {{i.type}}</h6>
                                        <h6>Giá phòng/đêm: {{formatPrice(i.price)}}</h6>
                                        <h6>Phòng phù hợp cho {{i.capacity}} người</h6>
                                    </div>
                                    <div class="chucnang">
                                        <b-button id="show-btn" v-b-modal="modalId(index)">Book room</b-button>
                                            <b-modal :id="'modal'+index" hide-footer title="Booking room">    
                                                <div class="bv-modal-example">
                                                    <form @submit.prevent="bookingroom(i.id)">
                                                        <table v-if="user">
                                                            <tr>
                                                                <td>Ten phong: </td>
                                                                <td>{{i.id}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Loai: </td>
                                                                <td>{{i.type}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Check-in:</td>
                                                                <td>
                                                                    {{search.start}}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Check-out: </td>
                                                                <td>
                                                                    {{search.end}}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tong tien: </td>
                                                                <td>{{priceTotal(i.price)}}</td>
                                                            </tr>
                                                        </table>
                                                        <div v-if="!user" class="notlogin">
                                                            <h1>Ban chua dang nhap</h1>
                                                            <h6>Dang nhap de dat phong</h6>
                                                        </div>
                                                        <div class="bookBtn">
                                                            <div class="btn">
                                                                <button v-if="user" @click="$bvModal.hide('modal' + index)" type="submit">Book</button>
                                                                <span v-if="!user"><router-link to="/login">Login</router-link></span>
                                                                <button class="mt-3" block @click="$bvModal.hide('modal' + index)">Cancel</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </b-modal>
                                    </div>
                                </div>
                        </div>
                        <div class="search">
                    <form @submit.prevent="handleSearch" method="post">
                        <h5>Search</h5>
                        <div class="where">
                            <h6>Destination</h6>
                            <!-- <input type="search" name="" id="" v-model="search.cityName"> -->
                            <div class="render">
                                <select v-model="search.cityName" aria-placeholder="Choose here">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option v-for="(option) in city" v-bind:key="option">
                                        {{ option }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="start">
                            <h6>Check-in</h6>
                            <input type="date" name="" id="" v-model="search.start" :min="nowDate">
                        </div>
                        <div class="end">
                            <h6>Check-out</h6>
                            <input type="date" name="" id="" v-model="search.end" :min="search.start">
                        </div>
                        <div class="capacity">
                            <h6>Capacity</h6>
                            <input type="number" name="" id="" min="1" value="1" v-model="search.capacity">
                        </div>
                        <div class="searchButton">
                            <button type="submit">Search</button>
                        </div>
                     </form>
                </div>
                    </div>
                        </div>
                    
            </div>
        </div>
        <hr>
        <div class="danhgia">
            <div class="total">
                <h4><i class='fas fa-star' style='color:red'></i> </h4>
            </div>
            <div class="Content">
                <div class="user">
                    <ul>
                        <li>
                            <img src="" alt="">
                        </li>
                        <li>
                            <ul>
                                <li>Ten: </li>
                                <li>Ngay comment</li>
                            </ul>
                        </li>
                    </ul>
                    <div class="soSao">
                        <i class='fas fa-star' style='color:rgb(228,213,106)'></i>
                        <i class='fas fa-star' style='color:rgb(228,213,106)'></i>
                        <i class='fas fa-star' style='color:rgb(228,213,106)'></i>
                        <i class='fas fa-star' style='color:rgb(228,213,106)'></i>
                        <i class='fas fa-star' style='color:rgb(228,213,106)'></i>
                    </div>
                    <div class="comment">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageLoader from "./PageLoader.vue";

export default {
  name: "view-room-search",
  data() {
    return {
      listHotel: JSON.parse(localStorage.getItem("listSearch")),
      idHotel: localStorage.getItem("idHotel"),
      search: {
        cityName: "Đà Nẵng",
        start: null,
        end: null,
        capacity: 1
      },
      city: JSON.parse(localStorage.getItem("city")),
      bookingRequest: {
        idRoom: null,
        start: null,
        end: null
      },
      priceTotalB: null,
      isloaded: null,
      timer: null,
      currentIndex: 0,
      hotel: null,
      nowDate: localStorage.getItem("nowDate")
    };
  },
  methods: {
    handleSearch() {
      this.isloaded = true;
      this.axios
        .post("search", this.search)
        .then(response => {
          localStorage.setItem("listSearch", JSON.stringify(response.data));
          localStorage.setItem("search", JSON.stringify(this.search));
          this.$router.push("/search/list-hotel");
          this.isloaded = false;
        })
        .catch(error => {
          console.error(error);
          this.isloaded = false;
        });
    },
    modalId(i) {
      return "modal" + i;
    },
    bookingroom(roomId) {
      this.isloaded = true;
      this.bookingRequest.idRoom = roomId;
      this.bookingRequest.start = this.search.start;
      this.bookingRequest.end = this.search.end;
      this.axios
        .post("user/booking", this.bookingRequest)
        .then(response => {
          console.warn(response.data);
          this.isloaded = false;
        })
        .catch(error => {
          console.error(error);
          this.isloaded = false;
        });
      // this.handleSearch();
    },

    priceTotal(price) {
      const date1 = new Date(this.search.start);
      const date2 = new Date(this.search.end);
      const oneDay = 1000 * 60 * 60 * 24;
      const diffInTime = date2.getTime() - date1.getTime();
      const diffInDays = Math.round(diffInTime / oneDay);
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND"
      }).format(price * diffInDays);
    },

    formatPrice(price) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND"
      }).format(price);
    },
    startSlide() {
      this.timer = setInterval(this.next, 5000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
    currentImg(i) {
      console.warn(this.hotel);
      return (
        "data:image/jpeg;base64," +
        this.hotel.rooms[i].images[
          Math.abs(this.currentIndex) % this.hotel.rooms[i].images.length
        ].img
      );
    }
  },
  mounted() {
    this.search = JSON.parse(localStorage.getItem("search"));
    this.$store.dispatch("headerShow", true);
    this.startSlide();
  },
  computed: {
    ...mapGetters(["user"])
  },
  components: {
    "page-loader": PageLoader
  },
  async created() {
    this.axios.get(`director/hotel/${this.idHotel}`).then(response => {
      this.hotel = response.data;
    });
  }
};
</script>

<style scoped>
.view-room-search {
  padding-top: 12vh;
  width: 86.5vw;
  margin: 0 auto;
}

ul {
  list-style: none;
}

ul li {
  margin-top: 3vh;
}

.view-room-search .img-hotel .img {
  margin: 0 auto;
}

.view-room-search .img-hotel .img .img2 img {
  width: 40vw;
  float: left;
  height: 49vh;
  margin-right: 1vw;
}

.view-room-search .img-hotel .img .img4 img {
  width: 20.2vw;
  height: 23vh;
}

.view-room-search .img-hotel .img .img4 .img4-1 img {
  margin-bottom: 3vh;
}

.phongtrong {
  margin-left: 2vw;
  margin-top: 12vh;
  float: left;
}

table {
  width: 60vw;
}

table td,
th {
  text-align: center;
  border: 1px solid rgb(236, 234, 234);
  padding: 2vh 1vw;
}

.bv-modal-example table {
  width: 35vw;
  margin: 0 auto;
}

.bv-modal-example .bookBtn {
  width: 50vw;
  margin: 3vh auto;
}

.bv-modal-example .bookBtn .btn {
  margin: 0 20%;
}

.bv-modal-example .bookBtn button,
a {
  margin: 0 1.5vw;
  /* width: 6.5vw; */
  text-decoration: none;
  font-size: 1.3vw;
  background-color: rgb(133, 176, 210);
}

.bv-modal-example .bookBtn a {
  padding: 1.05vh 1.1vw;
  border-radius: 10px;
  border: 1px solid rgb(80, 79, 79);
  color: white;
}

.bv-modal-example .bookBtn .mt-3 {
  background-color: rgb(233, 81, 81);
  color: white;
}

.bv-modal-example input {
  width: 12vw;
}

#name {
  width: 15vw;
}

.search {
  float: right;
  width: 24vw;
  margin-top: 12vh;
}

.search form {
  margin-left: 2vw;
  padding: 2vw;
  border: 1px solid rgb(185, 180, 180);
}

.search form input,
select {
  width: 18vw;
  border: 0.5px solid rgb(163, 159, 159);
  padding: 1vh 0.8vw;
  font-size: 1vw;
}

.search form h6 {
  font-size: 0.9vw;
  margin-top: 4vh;
}

.search form button {
  width: 18vw;
  margin-top: 5vh;
  padding: 1.2vh 1vw;
  background-color: #e4d56a;
}

button {
  border: 1px solid rgb(80, 79, 79);
  font-size: 1vw;
  padding: 1vh 0.7vw;
  border-radius: 10px;
}

/* ------------- */
.phongtrong {
  border: 1px solid rgb(240, 238, 238);
  padding: 2vw;
}
.phongtrong .showphong {
  /* background-color: aqua; */
  overflow: hidden;
  /* border: 1px solid rgb(209, 206, 206); */
  padding: 4vh 3vw;
  border-radius: 10px;
  margin-top: 5vh;
}

.phongtrong .img {
  float: left;
}

.phongtrong .infor {
  float: left;
  margin: 0vh 3vw;
  width: 22vw;
}

.phongtrong .chucnang {
  float: right;
  width: 3vw;
  margin-bottom: 2vh;
}

.phongtrong .infor h3 {
  border-bottom: 2px solid rgb(224, 112, 112);
  padding-bottom: 2vh;
}

.phongtrong .infor h6 {
  text-align: start;
  margin-top: 2vh;
}

/* .phongtrong .img  */

.phongtrong .img img {
  height: 27vh;
  width: 19vw;
  border-radius: 20px;
}

.phongtrong .img button {
  height: 4vh;
  width: 1.8vw;
  background-color: white;
  border-radius: 50%;
  padding: 0 0.5vw;
  position: relative;
  top: -15vh;
  display: none;
}

.phongtrong .img:hover button {
  display: inline;
}

.phongtrong .img #next {
  left: 80.5%;
}

.phongtrong .img button:hover {
  height: 4.1vh;
  width: 1.82vw;
}
</style>
