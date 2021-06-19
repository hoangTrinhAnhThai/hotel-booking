<template>
    <div class="admin">
        <div class="header">

        </div>
        <li id="btn">
                            <button v-on:click="viewroom(item.id)"  type="submit">View rooms</button>
                            <div class="chucnang">
                                <b-button id="show-btn" v-on:click="editHotel(index)"  v-b-modal="modalId(index)">Add new hotel</b-button>
                                <b-modal :id="'modal'+ index" hide-footer>
                                    <div class="add">
                                        <form @submit.prevent="addNewHotel" method="post" enctype="multipart/form-data">
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
                                                <input 
                                                    type="file" 
                                                    ref="files" 
                                                    class="file-input"
                                                    @change="selectFile"
                                                    multiple
                                                />
                                                <!-- <input type="file" @change="previewFiles" multiple> -->
                                            </div>
                                            <div class="field">
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
                                            
                                            <div v-for="(item,index) in imgHotel" class="level" v-bind:key="item.id" >
                                                <div class="level-left">
                                                    <img :src="'data:image/jpeg;base64,' + item.img">
                                                </div>
                                                <div class="level-right">
                                                    <div class="level-item">
                                                        <a v-on:click="deleteImg(index)" class="delete">click</a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <button type="submit">Add</button>
                                        </form>
                                        
                                    </div>
                                </b-modal>
                                <a href="#"><i class="fas fa-edit"></i></a>
                                <a href="#"><i class="far fa-trash-alt"></i></a>
                            </div>
                        </li>
    </div>
</template>

<script>
import axios from 'axios'
import json from '../city.json'
export default {
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
            imgHotel: null,
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
            console.warn(this.selectedProvince)
        },

        async fetchCities() {
            console.warn(this.selectedDistrict)
            this.cities = this.selectedDistrict.Wards
            console.warn(this.selectedDistrict)
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
            
            console.warn(this.selectedCity)
            const formData = new FormData();
            for( var i = 0; i < this.files.length; i++ ){
                formData.append('images', this.files[i]);
                console.warn(this.files[i])
            }
            formData.append('hotelRequest', JSON.stringify(this.hotelRequest))
            this.axios.post('/director/hotel/new-hotel', formData,  {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }) 
            .then((response) => {
                console.warn(response);
            })

            // this.$router.go()
        },

        selectFile() {
            console.warn('vo duoc ma')
            const files = this.$refs.files.files;
            console.warn(files)
            this.files = ([...this.files, ...files ]);
            // this.files.push(files)
            console.warn(this.files[0])
        },

        
        deleteImg(index) {
            (this.files).splice(index, 1);
        },

        modalId(i) {
            return 'modal' + i;
        },

        editHotel(index) {
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
            this.hotelRequest.localization.street = this.address[0]
            // this.files = JSON.stringify(this.listHotel[index].images)
            this.imgHotel = this.listHotel[index].images
        },

        convert(file) {
            return URL.createObjectURL(file)
        }
    },
    mounted() {
        this.fetchProvinces();
        
    },
    
    async created() {
        this.$store.dispatch('headerShow', false)
        
        const response = await axios.get('/director/hotel', {
            headers: {
                Authorization: localStorage.getItem('token') 
            }
        })
        this.listHotel = response.data
        console.warn(this.listHotel[3])
        
    },
}
</script>

<style scoped>
.header{
   background-color: rgba(41, 46, 49,.9);
        height: 60px;
        width: 100%;
}
</style>>

