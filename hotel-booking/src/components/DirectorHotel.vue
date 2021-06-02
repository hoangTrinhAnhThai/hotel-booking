<template>
    <div class="director-hotel">
        <div class="hotel-list">
                <div class="list">
                    <ul class="hotel" v-for="(item, index) in listHotel" v-bind:key="item.id">
                        
                        <!-- <li style="flex: 0 35vw">name
                            <div class="content">
                                <ul>
                                    <li id="nameHotel">Ten Khach san: {{item.name}}</li>
                                    <li>Dia chi: {{item.address.street}} - {{item.address.city}}</li>
                                    <li>Tieu chuan: {{item.standard}}</li>
                                </ul>
                            </div>
                        </li> -->
                        <li id="btn">
                            <button v-on:click="viewroom(item.id)"  type="submit">View rooms</button>
                            <div class="chucnang">
                                <b-button id="show-btn" v-on:click="editHotel(index)"  v-b-modal="modalId(index)">Add new hotel</b-button>
                                <b-modal :id="'modal'+ index" hide-footer>
                                    <div class="add">
                                        <form @submit.prevent="addNewHotel" method="post" enctype="multipart/form-data">

                                            <div class="img">
                                                <!-- <input 
                                                    type="file" 
                                                    ref="files" 
                                                    class="file-input"
                                                    @change="selectFile"
                                                    multiple
                                                /> -->
                                                <!-- <input type="file" @change="previewFiles" multiple> -->
                                        
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
                                        </form>
                                    </div>
                                </b-modal>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
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
        selectFile(e) {
            // console.warn('vo duoc ma')
            // const files = this.$refs.files.files;
            // console.warn(files)
            // this.files = ([...this.files, ...files ]);


            var files = e.target.files || e.dataTransfer.files;
            console.warn(files)
            this.files = ([...this.files, ...files ]);
        },
        blobToFile(theBlob, fileName){
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            theBlob.lastModifiedDate = new Date();
            theBlob.name = fileName;
            return theBlob;
        },





















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

        deleteImg(index) {
            (this.files).splice(index, 1);
        },

        modalId(index) {
            return 'modal'+index
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
            this.imgage = this.listHotel[index].images[0]

            var byteString = atob(this.imgage.img);

            var ia = new Uint8Array(byteString.length);
            for (var l = 0; l < byteString.length; l++) {
                ia[l] = byteString.charCodeAt(l);
            }
            console.warn(new Blob([ia], {type:'image/jpeg'}));

            var myFile = this.blobToFile(new Blob([ia], {type:'image/jpeg'}), "my-image.png");
            console.warn(myFile)
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
        
    },
}
</script>

<style>

</style>
