<template>
    <div class="director">
        <page-loader v-bind:isloaded="isloaded"/>
        <!-- <director-header/> -->
        <div class="header">

        </div>
        <div class="container">
            <div class="add-new-hotel">
                <h1>Danh sach cac khach san</h1>
                <b-button id="show-btn" v-on:click="openAddHotelForm" @click="$bvModal.show('bv-modal-example')">Add new hotel</b-button>
                <b-modal id="bv-modal-example" hide-footer>
                    <div class="add">
                        <form @submit.prevent="addNewHotel(100000)" method="post" enctype="multipart/form-data">
                            <label for="">Ten Khach San</label><br>
                            <input type="text" v-model="hotelRequest.name" required><br>
                            <label for="">Standar</label><br>
                            <input required type="text" v-model="hotelRequest.standard" @keypress="onlyNumber"><br>

                            <label for="">Province</label><br>
                            <select required v-model="selectedProvince" @change="fetchDistricts" :disabled="!provinces.length">
                                <option
                                    v-for="province in provinces"
                                    :key="province.id"
                                    :value="province"
                                >{{ province.Name }}</option>
                            </select><br>
                                            
                            <label for="">Districts</label><br>
                            <select required v-model="selectedDistrict" @change="fetchCities" :disabled="!districts.length">
                                <option
                                    v-for="district in districts"
                                    :key="district.id"
                                    :value="district"
                                    >{{ district.Name }}</option>
                            </select><br>

                            <label for="">Ward</label><br>
                            <select required v-model="selectedCity" :disabled="!cities.length">
                                <option value="" selected disabled>Select a city</option>
                                <option 
                                    v-for="city in cities" 
                                    :key="city.id" 
                                    :value="city">{{ city.Name }}</option>
                            </select><br>

                            <label for="">Dia chi cu the</label><br>
                            <input type="text" required v-model="hotelRequest.localization.street">
                            <div class="img">
                                <input id="image" v-on:change="selectFile" type="file">
                            </div>
                            <div v-if="files" class="field">
                                <div v-for="(file, index) in files" :key="index" class="level">
                                    <div class="level-left">
                                        <img :src="convert(file)" alt="">
                                    </div>
                                    <div class="level-right">
                                        <div class="level-item">
                                            <a v-on:click="deleteImg(index)" class="delete">click</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" block @click="$bvModal.hide('bv-modal-example')">ADD</button>
                        </form>
                                        
                    </div>
            </b-modal>
            </div>

            <div class="hotel-list">
                <div class="list">
                    <ul class="hotel" v-for="(item, index) in listHotel" v-bind:key="item.id">
                        <li v-if="item.images.length > 0" id="imgHotel">
                            <!-- <img :src="'data:image/jpeg;base64,' + item.images[0].img"> -->
                            <img :src="currentImg(index)">
                        </li>
                        <li v-else id="imgHotel">
                            <img src="https://homestay.review/wp-content/uploads/2018/12/Belle-Amour-Hotel-%C4%90%C3%A0-L%E1%BA%A1t-10.jpg" alt="">
                            
                        </li>
                        
                        <li style="flex: 0 35vw">
                            <div class="content">
                                <ul>
                                    <li id="nameHotel">Ten Khach san: {{item.name}}</li>
                                    <li>Dia chi: {{item.address.street}} - {{item.address.city}}</li>
                                    <li>Tieu chuan: {{item.standard}}</li>
                                </ul>
                            </div>
                        </li>
                        <li id="btn">
                            <button v-on:click="viewroom(item.id)"  type="submit">View rooms</button>
                            <div class="chucnang">
                                <button id="show-btn" v-on:click="openEditHotel(index)"  v-b-modal="modalId(index)"><i class="fas fa-edit"></i></button>                                
                                    <b-modal :id="'modal'+ index" hide-footer>
                                    <div class="add">
                                        <form @submit.prevent="addNewHotel(item.id)" method="post" enctype="multipart/form-data">
                                            <label for="">Ten Khach San</label><br>
                                            <input type="text" v-model="hotelRequest.name" required><br>
                                            <label for="">Standar</label><br>
                                            <input required type="text" v-model="hotelRequest.standard" @keypress="onlyNumber"><br>

                                            <label for="">Province</label><br>
                                            <select required v-model="selectedProvince" @change="fetchDistricts" :disabled="!provinces.length">
                                                <option
                                                v-for="province in provinces"
                                                :key="province.id"
                                                :value="province"
                                                >{{ province.Name }}</option>
                                            </select><br>
                                            
                                            <label for="">Districts</label><br>
                                            <select required v-model="selectedDistrict" @change="fetchCities" :disabled="!districts.length">
                                                <option
                                                v-for="district in districts"
                                                :key="district.id"
                                                :value="district"
                                                >{{ district.Name }}</option>
                                            </select><br>

                                            <label for="">Ward</label><br>
                                            <select required v-model="selectedCity" :disabled="!cities.length">
                                                <option value="" selected disabled>Select a city</option>
                                                <option 
                                                    v-for="city in cities" 
                                                    :key="city.id" 
                                                    :value="city">{{ city.Name }}</option>
                                            </select><br>

                                            <label for="">Dia chi cu the</label><br>
                                            <input type="text" required v-model="hotelRequest.localization.street">
                                            <div class="img">
                                                <input id="image" v-on:change="selectFile" type="file">
                                            </div>
                                            <div v-if="files" class="field">
                                                <div v-for="(file, index) in files" :key="index" class="level">
                                                    <div class="level-left">
                                                        <img :src="convert(file)" alt="">
                                                    </div>
                                                    <div class="level-right">
                                                        <div class="level-item">
                                                            <a v-on:click="deleteImg(index)" class="delete">click</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" @click="$bvModal.hide('modal' + index)">Save</button>
                                        </form>
                                        
                                    </div>
                                </b-modal>
                                <button v-on:click="deleteHotel(item.id)" v-b-modal="modalIdD(index)"><i class="far fa-trash-alt"></i></button>
                                <b-modal :id="'modalD'+index" hide-footer title="Booking room">    
                                    <div class="bv-modal-example">
                                        <span v-bind="isDelete">{{isDelete}}</span>            
                                    </div>
                                </b-modal>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import json from '../city.json'
// import DirectorHeader from './DirectorHeader.vue'
import PageLoader from './PageLoader.vue'
import { setInterval } from 'timers';


export default {
    name: 'director',
    data() {
        return {
            isloaded: false,
            isDelete: null,
            hotelRequest: {
                name: null,
                standard: null,
                localization: {
                    country: 'Việt Nam',
                    city: null,
                    street: null
                }
            },
            provinces: [],
            districts: [],
            cities: [],
            timer: null,
            currentIndex:0,

            selectedProvince: {
                Districts: [],
                Id: null,
                Name: null
            },
            selectedDistrict: {
                Id: null,
                Name: null,
                Wards: []
            },
            selectedCity: {
                Id: null,
                Name: null,
                Level: null
            },
            myJson: json,
            files: [],
            listHotel: null,
            imgHotel: [],
            address: null,
            selectedne: " "
        }
    },
    methods: {
        async fetchProvinces() {
            this.provinces = this.myJson
        },

        async fetchDistricts() {
            this.cities = [];
            this.districts = this.selectedProvince.Districts
        },

        async fetchCities() {
            this.cities = this.selectedDistrict.Wards
        },

        onlyNumber ($event) {
            //console.log($event.keyCode); //keyCodes value
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
                $event.preventDefault();
            }
        },

        openAddHotelForm() {
            this.files = []
            this.hotelRequest.name = null
            this.hotelRequest.standard = null
            this.hotelRequest.localization.city = null
            this.hotelRequest.localization.street = null

            this.selectedProvince = null
            this.selectedDistrict = null
            this.selectedCity = null
        },

        addNewHotel(hotelId) {
            this.isloaded = true
            this.hotelRequest.localization.city = this.selectedProvince.Name;
            this.hotelRequest.localization.street += ' - ' + this.selectedCity.Name + ' - ' +  this.selectedDistrict.Name
            
            console.warn(this.selectedCity)
            const formData = new FormData();
            for( var i = 0; i < this.files.length; i++ ){
                formData.append('images', this.files[i]);
                console.warn(this.files[i])
            }
            formData.append('hotelRequest', JSON.stringify(this.hotelRequest))

            if(hotelId == 100000) {
                this.axios.post('director/hotel/new-hotel', formData,  {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                }) 
                .then((response) => {
                    console.warn(response);
                    this.isloaded = false
                    this.$router.go()
                })
            } else {
                this.axios.post(`director/hotel/${hotelId}/update/save`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                })
                .then((response) => {
                    console.warn(response);
                    this.isloaded = false
                    this.$router.go()
                })
                .catch(( error) => {
                    console.error(error)
                    this.isloaded = false
                })
            }
            // this.$router.go()
        },

        selectFile(e) {
            var files = e.target.files || e.dataTransfer.files;
            console.warn(files)
            this.files = ([...this.files, ...files ]);
        },

        
        deleteImg(index) {
            (this.files).splice(index, 1);
            console.warn(index)
            console.warn(this.files.length)
        },

        modalId(index) {
            return 'modal'+index
        },
        modalIdD(index) {
            return 'modalD'+index
        },

        blobToFile(theBlob, fileName){
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            theBlob.lastModifiedDate = new Date();
            theBlob.name = fileName;
            return theBlob;
        },

        openEditHotel(index) {
            this.files = []
            this.hotelRequest.name = this.listHotel[index].name
            this.hotelRequest.standard = this.listHotel[index].standard
            this.hotelRequest.localization.city = this.listHotel[index].address.city

            this.address = (this.listHotel[index].address.street).split("-")
            for(var i = 0; i < this.myJson.length; i++) {
                if(this.myJson[i].Name == this.listHotel[index].address.city){
                    this.selectedProvince.Id = this.myJson[i].Id
                    this.selectedProvince.Name = this.myJson[i].Name
                    this.selectedProvince.Districts = this.myJson[i].Districts
                    this.districts = this.myJson[i].Districts
                    break;
                }
            }
            for(var j = 0; j < this.districts.length; j++) {
                if(this.districts[j].Name == (this.address[2]).trim()) {
                    this.selectedDistrict.Id = this.districts[j].Id
                    this.selectedDistrict.Name = this.districts[j].Name
                    this.selectedDistrict.Wards = this.districts[j].Wards
                    this.cities = this.districts[j].Wards
                    break
                }
            }
            for(var k = 0; k < this.cities.length; k++) {
                if(this.cities[k].Name == (this.address[1]).trim()) {
                    this.selectedCity.Id = this.cities[k].Id
                    this.selectedCity.Name = this.cities[k].Name
                    this.selectedCity.Level = this.cities[k].Level
                    break
                }
            }
            this.hotelRequest.localization.street = (this.address[0]).trim()
            this.imgHotel = this.listHotel[index].images
            for(var p = 0; p < (this.listHotel[index].images).length; p++) {
                var byteString = atob(this.listHotel[index].images[p].img);
                var ia = new Uint8Array(byteString.length);
                for (var l = 0; l < byteString.length; l++) {
                    ia[l] = byteString.charCodeAt(l);
                }           
                var myFile = this.blobToFile(new Blob([ia], {type:'image/jpeg'}), "my-image.png");
                this.files.push(myFile)
            }
        },

        deleteHotel(hotelId) {
            this.isloaded = true
            this.axios.delete(`director/hotel/${hotelId}/delete`)
            .then((response) => {
                console.warn(response.data.message)
                if(response.data.message == 'Delete hotel successful') {
                    this.isloaded = false
                    this.isDelete = response.data.message;
                    this.$router.go()
                }
            })
            
        },
        viewroom(hotelId) {
            this.isloaded = true
            localStorage.setItem('hotelId', hotelId)
            this.$router.push(`/director/hotel/${hotelId}/room`)
        },

        convert(file) {
            return URL.createObjectURL(file)
        },

        startSlide() {
            this.timer = setInterval(this.next, 5000)
        },
        next() {
            this.currentIndex +=1
        },
        prev() {
            this.currentIndex -=1
        },
        currentImg(i) {
            return 'data:image/jpeg;base64,' + this.listHotel[i].images[Math.abs(this.currentIndex) % this.listHotel[i].images.length].img;
        }
    },
    mounted() {
        this.fetchProvinces();
        this.startSlide();
    },
    computed: {
        
    },
    components: {
        // 'director-header': DirectorHeader,
        'page-loader': PageLoader

    },
    async created() {
        this.isloaded = true
        this.$store.dispatch('headerShow', false)
        
        this.axios.get('/director/hotel', {
            headers: {
                Authorization: localStorage.getItem('token') 
            }
        })
        .then((response) => {
            this.listHotel = response.data
            console.warn(this.listHotel)
            this.isloaded = false
        })
        .catch((error)=> {
            this.isloaded = false
            console.console(error)
        })
        
    },
    
}
</script>

<style scoped>
    .director .container {
        margin-left: 5vw;
        height: 100vh;
    }


   .header{
        background-color: rgba(41, 46, 49,.9);
        height: 60px;
        width: 100%;
   }
    .add {                                             
        width: 80%;
        font-family: 'Dancing Script', cursive;
    }

    .add-new-hotel {
        margin-left: 5vw;
    }

    .add-new-hotel h1 {
        padding-top: 5vh;
    }
    #show-btn {
        width: 10vw;
    }
    .add form {
        margin: 2vh auto;
    }

    .add button {
        margin: 4vh 35% 2vh;
        width: 35%;
        border: 1px solid white;
        background-color: rgb(20, 20, 20);
        color: white;
        padding: 1.5vh 0;
        
    }

    .add label {
        margin: 1.5vh 0 1vh;
    }

    .add input, select {
        width: 100%;
        border: 1px solid rgb(175, 174, 174);
        border-radius: 5px;
        height: 6vh;
    }

    .add .img {
        margin: 3vh 0;
    }

    .field {
        background-color: rgb(210, 210, 214);
        border-radius: 10px;
    }

    .level {
        display: flex;
        /* border: 0.5px solid rgb(218, 213, 213); */
        padding: 2vh 2vw;
    }

    .level .level-left {
        flex-basis: 90%;
        float: left;
        /* background-color: brown; */
        
    }
/* ------------------------------------ */  
    .hotel-list {
        width: 80vw;
        /* background-color: blueviolet; */
    }

    .list {
        margin: 0 5vw;
    }

    ul {    
        list-style: none;
        
    }
    

    .list > ul {
        border: 1px solid #92b6c5;
        border-radius: 10px;
        padding: 2vh 3vw 5vh;
        margin-top: 5vh;
    }

    .hotel {
        display: flex;
        margin-top: 3vh;
        width: 70vw;
    }

    ul li {
        margin-top: 3vh;
    }

    #imgHotel img{
        width: 22vw;   
        height: 28vh;
    }

    #nameHotel {
        font-weight: bolder;
    }
    button {
        font-size: 1.2vw;
        border: 0.5px solid gray;
        background-color: #92b6c5;
        border-radius: 10px;
        padding: 1vh;
        width: 10vw
    }

    .chucnang {
        margin-top: 14vh;
    }

    .chucnang button {
        width: 4.5vw;
    }

    .chucnang #show-btn {
        width: 4.5vw;
        margin-right: 1vw;
    }

    .level-left img {
        height: 15vh;
        width: 15vw;
    }


</style>
