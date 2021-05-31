<template>
    <div class="director">
        <director-header/>
        <div class="container">
            <h1>Danh sach cac khach san</h1>
            <div class="add-new-hotel">
                <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Add new hotel</b-button>
                <b-modal id="bv-modal-example" hide-footer>
                    <div class="add">
                        <form @submit.prevent="addNewHotel" method="post" enctype="multipart/form-data">
                            <label for="">Ten Khach San</label><br>
                            <input type="text" v-model="hotelRequest.name" required><br>
                            <label for="">Standar</label><br>
                            <input required type="text" v-model="hotelRequest.standard" @keypress="onlyNumber"><br>

                            <label for="">Province</label><br>
                            <select required v-model="selectedProvince" @change="fetchDistricts" :disabled="!provinces.length">
                                <option value="" selected disabled>Select a province</option>
                                <option
                                v-for="province in provinces"
                                :key="province.id"
                                :value="province"
                                >{{ province.Name }}</option>
                            </select><br>
                            
                            <label for="">Districts</label><br>
                            <select required v-model="selectedDistrict" @change="fetchCities" :disabled="!districts.length">
                                <option value="" selected disabled>Select a district</option>
                                <option
                                v-for="district in districts"
                                :key="district.id"
                                :value="district"
                                >{{ district.Name }}</option>
                            </select><br>

                            <label for="">Ward</label><br>
                            <select required v-model="selectedCity" :disabled="!cities.length">
                                <option value="" selected disabled>Select a city</option>
                                <option v-for="city in cities" :key="city.id" :value="city">{{ city.Name }}</option>
                            </select><br>

                            <label for="">Dia chi cu the</label><br>
                            <input type="text" required v-model="hotelRequest.localization.street">
                            <!-- <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button> -->
                            <div class="img">
                                <!-- <input type="button" v-on:click="selectFile" class="choose-img" /> -->
                                <input 
                                    type="file" 
                                    ref="files" 
                                    class="file-input"
                                    @change="selectFile"
                                    multiple
                                />
                                
                            </div>
                            <div v-if="files" class="field">
                                <div v-for="(file, index) in files" :key="index" class="level">
                                    <div class="level-left">
                                        <!-- <div v-if="file.name.length > 14" class="level-item">{{file.name.slice(0,6)}}...{{file.name.slice(-7)}}</div> -->
                                        <div class="level-item">{{file.name}}</div>
                                    </div>
                                    <div class="level-right">
                                        <div class="level-item">
                                            <a v-on:click="deleteImg(index)" class="delete">click</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit">Add</button>
                        </form>
                        
                    </div>
                    
                </b-modal>
            </div>
            <div class="hotel-list">
                <div class="list">
                    <ul class="hotel" v-for="item in listHotel" v-bind:key="item.id">
                        <li id="imgHotel">
                            <img :src="'data:image/jpeg;base64,' + item.images[0].img">
                            <!-- <img src="https://hoangviettravel.vn/wp-content/uploads/2019/12/homestay-da-lat-co-view-dep06-min.jpg" alt=""> -->
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
                                <a href="#"><i class="fas fa-edit"></i></a>
                                <a href="#"><i class="far fa-trash-alt"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import json from '../city.json'
import DirectorHeader from './DirectorHeader.vue'
// import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
    name: 'director',
    data() {
        return {
            
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

            selectedProvince: null,
            selectedDistrict: null,
            selectedCity: null,
            myJson: json,
            files: [],
            listHotel: null,
            imgHotel: null,
        }
    },
    methods: {
        async fetchProvinces() {
            this.provinces = this.myJson
        },

        async fetchDistricts() {
            // const { data: { data: districts } } = await axios.get("districts");
            this.cities = [];
            var i;
            for(i = 0; i < this.myJson.length; i ++) {
                if(this.selectedProvince.Id == this.myJson[i].Id) {
                    this.districts = this.myJson[i].Districts;
                    break;
                }
            }
        },

        async fetchCities() {
            var i;
            for(i = 0; i < this.districts.length; i ++) {
                if(this.selectedDistrict.Id == this.districts[i].Id) {
                    this.cities = this.districts[i].Wards;
                    break;
                }
            }
        },
        onlyNumber ($event) {
            //console.log($event.keyCode); //keyCodes value
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
                $event.preventDefault();
            }
        },

        addNewHotel() {
            this.hotelRequest.localization.city = this.selectedProvince.Name;
            this.hotelRequest.localization.street += ' - ' + this.selectedCity.Name + ' - ' +  this.selectedDistrict.Name
            const formDatas = new FormData();

            for( var i = 0; i < this.files.length; i++ ){
                formDatas.append('images', this.files[i]);
            }

            formDatas.append('hotelRequest', JSON.stringify(this.hotelRequest))
            this.axios.post('/director/hotel/new-hotel', formDatas,  {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }) 
            .then((response) => {
                console.warn(response);
            })
        },

        selectFile() {
            const files = this.$refs.files.files;
            this.files = [...this.files, ...files ];

        },
        
        deleteImg(index) {
            for(var i =0; i < this.files.length; i ++) {
                if(i == index) {
                    this.files.pop()
                    console.warn('oke luon' + i)
                }
            }
        },
    },
    mounted() {
        this.fetchProvinces();
        
    },
    components: {
        'director-header': DirectorHeader
    },
    async created() {
        this.$store.dispatch('headerShow', false)
        
        const response = await axios.get('/director/hotel', {
            headers: {
                Authorization: localStorage.getItem('token') 
            }
        })
        this.listHotel = response.data
        
    },
    
}
</script>

<style scoped>
    .director .container {
        /* padding-top: 12vh; */
        margin-left: 18vw;
    }

    .director-header {
        float: left;
        width: 20vw;
        height: 100vh;
        background-color: rgb(114,167,207);
        position: fixed;
    }
    .add {                                             
        
        width: 80%;
        margin: 0 auto;
        font-family: 'Dancing Script', cursive;
    }
    #show-btn, h1 {
        /* float: right; */
        margin-left: 5vw;
    }

    #show-btn {
        width: 10vw;
    }
    .add form {
        margin: 2vh auto;
        /* background-color: aqua */
    }

    .add button {
        margin: 4vh 35% 2vh;
        width: 30%;
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
        /* background-color: aqua; */
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
        width: 8vw
    }

    .chucnang {
        margin-top: 14vh;
    }

    .chucnang i {
        margin: 0 1vw;
        font-size: 2vw;
    }



</style>
