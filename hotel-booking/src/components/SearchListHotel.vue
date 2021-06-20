<template>
  <div class="search-list-hotel">
    <page-loader v-bind:isloaded="isloaded" />
    <!-- <header-comp/> -->
    <div class="contain">
      <div class="left-container">
        <div class="search">
          <form @submit.prevent="handleSearch" method="post">
            <h5>Search</h5>
            <div class="where">
              <h6>Destination</h6>
              <!-- <input type="search" name="" id="" v-model="search.cityName"> -->
              <div class="render">
                <select
                  v-model="search.cityName"
                  aria-placeholder="Choose here"
                >
                  <option value="" selected disabled hidden>Choose here</option>
                  <option v-for="option in city" v-bind:key="option">
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>
            <div class="start">
              <h6>Check-in</h6>
              <input
                type="date"
                name=""
                id=""
                v-model="search.start"
                :min="nowDate"
              />
            </div>
            <div class="end">
              <h6>Check-out</h6>
              <input
                type="date"
                name=""
                id=""
                v-model="search.end"
                :min="search.start"
              />
            </div>
            <div class="capacity">
              <h6>Capacity</h6>
              <input
                type="number"
                name=""
                id=""
                min="1"
                value="1"
                v-model="search.capacity"
              />
            </div>
            <div class="searchButton">
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div class="right-container">
        <h1>Cac khu vuc lan can</h1>
        <h4 v-if="isHave">{{ isHave }}</h4>
        <div class="hotel-list">
          <ul
            class="hotel"
            v-for="(item, index) in listHotel"
            v-bind:key="item.id"
          >
            <li id="imgHotel">
              <img
                :src="currentImg(index)"
                v-on:click="viewroom(item.hotel.id)"
              />
              <br />
              <button id="prev" class="prev" @click="prev">&#10094;</button>
              <button id="next" class="next" @click="next">&#10095;</button>
            </li>
            <li v-on:click="viewroom(item.hotel.id)" style="flex: 0 32vw">
              <div class="content">
                <ul>
                  <li id="nameHotel">{{ item.hotel.name }}</li>
                  <li>
                    {{ item.hotel.address.street }} -
                    {{ item.hotel.address.city }}
                  </li>
                  <br /><br />
                  <li>
                    <i class="fas fa-star" style="color: red"></i>
                    {{ item.hotel.standard }}
                  </li>
                </ul>
              </div>
            </li>
            <br />

            <li id="btn">
              <!-- <button v-on:click="viewroom(item.hotel.id)"  type="submit">View rooms</button> -->
            </li>
          </ul>
         
        </div>
         <paginate
            :page-count="20"
            :prev-text="'Prev'"
            :next-text="'Next'"
        
          />
          
      </div>
    </div>
  </div>
</template>

<script>
import PageLoader from "./PageLoader.vue";
import Paginate from "vuejs-paginate";

export default {
  name: "search-list-hotel",
  data() {
    return {
      nowDate: localStorage.getItem("nowDate"),
      listHotel: JSON.parse(localStorage.getItem("listSearch")),
      infImg: {
        id: null,
        img: null,
      },
      search: {
        cityName: null,
        start: null,
        end: null,
        capacity: 1,
      },
      city: JSON.parse(localStorage.getItem("city")),
      isloaded: null,
      isHave: null,
      timer: null,
      currentIndex: 0,
      imgs: null,
    };
  },
  component: {
    Paginate,
  },
  mounted() {
    this.startSlide();
    this.isloaded = true;
    this.$store.dispatch("headerShow", true);

    this.search = JSON.parse(localStorage.getItem("search"));
    console.warn(this.listHotel);
    if (this.listHotel.length == 0) {
      this.isHave = "KHONG CO HOTEL NAO";
    }
    this.isloaded = false;
    console.warn(this.nowDate);
  },
  methods: {
    viewroom(idHotel) {
      localStorage.setItem("idHotel", idHotel);
      this.$router.push("/search/list-hotel/viewrooms");
    },
    handleSearch() {
      this.isloaded = true;
      this.axios
        .post("search", this.search)
        .then((response) => {
          localStorage.setItem("listSearch", JSON.stringify(response.data));
          localStorage.setItem("search", JSON.stringify(this.search));
          console.warn(JSON.parse(localStorage.getItem("listSearch")));
          this.$router.go(0);
          this.isloaded = false;
        })
        .catch((error) => {
          console.warn(error);
          this.isloaded = false;
        });
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
      // console.warn(this.listHotel[i].hotel)
      // console.warn(this.listHotel[i].images.length)
      // console.warn(this.listHotel[i].images[Math.abs(this.currentIndex) % this.listHotel[i].images.length].img)
      return (
        "data:image/jpeg;base64," +
        this.listHotel[i].hotel.images[
          Math.abs(this.currentIndex) % this.listHotel[i].hotel.images.length
        ].img
      );
    },
  },
  components: {
    "page-loader": PageLoader,
  },
};
</script>

<style scoped>
.search-list-hotel {
  background-image: linear-gradient(
      rgba(17, 17, 17, 0.7),
      rgba(17, 17, 17, 0.7)
    ),
    url("https://preview.colorlib.com/theme/theriver/images/about.jpg.webp");
  background-color: grey;
  min-height: 120vh;
  /* opacity: 0.28; */
  /* position: absolute; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}

.search-list-hotel img {
  height: 100%;
  width: 20vw;
  border-radius: 20px;
  margin: 0;
}

.left-container {
  width: 25vw;
  margin-left: 2.5vw;
  float: left;
  padding-top: 18vh;
  border-right: 1px solid rgb(235, 231, 231);
}

.left-container .search {
  margin-left: 2.3vw;
  background-color: #e6dd9d;
  margin-right: 2vw;
  color: black;
}

.left-container .search form {
  margin-left: 2.5vw;
  padding: 5vh 0;
}

.left-container .search h6 {
  font-size: 0.9vw;
  margin-top: 4vh;
}

.left-container .search input,
select {
  width: 16vw;
  border: 0.5px solid rgb(163, 159, 159);
  padding: 1vh 0.8vw;
  font-size: 1vw;
}

.left-container .search [type="submit"] {
  width: 16vw;
  margin-top: 5vh;
  border: 0.5px solid grey;
  padding: 1.2vh 1vw;
  background-color: #e4d56a;
}

.right-container {
  margin-left: 3vw;
  margin-top: 17vh;
  max-width: 75vw;
  float: left;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
}

ul {
  list-style: none;
}

.hotel-list > ul {
  border: 1px solid #e2ebf0;
  padding: 1vh 3vw 0;
  border-radius: 20px;
}

.hotel {
  display: flex;
  margin-top: 3vh;
  /* background-color: aqua; */
  width: 62vw;
}

.hotel .content {
  font-size: 1.1vw;
}

ul li {
  margin: 2vh 0 2.2vh;
  padding: 0;
}

#nameHotel {
  font-weight: bolder;
}
button {
  font-size: 1.2vw;
  border: 0.5px solid gray;
  background-color: #92b6c5;
  border-radius: 10px;
  /* padding: 1vh; */
}
#imgHotel {
  /* margin: 0; */
  padding: 0;
}

#imgHotel button {
  height: 4vh;
  width: 1.8vw;
  background-color: white;
  border-radius: 50%;
  padding: 0 0.5vw;
  position: relative;
  top: -48%;
  display: none;
}
#imgHotel button {
  display: inline-block;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#imgHotel #next {
  left: 82%;
}

#imgHotel button:hover {
  height: 4.1vh;
  width: 1.82vw;
}
</style>
