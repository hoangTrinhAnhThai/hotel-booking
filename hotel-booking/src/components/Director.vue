<template>
    <div class="director">
        <div class="add-new-hotel">
                <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Add new hotel</b-button>
                <b-modal id="bv-modal-example" hide-footer>
                    <div class="add">
                        <form @submit.prevent="addNewHotel">
                            <label for="">Ten Khach San</label><br>
                            <input type="text" v-model="hotel.name" required><br>
                            <label for="">Standar</label><br>
                            <input required type="text" v-model="hotel.standard" @keypress="onlyNumber"><br>

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
                            <input type="text" required v-model="hotel.localization.street">
                            <!-- <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button> -->

                            <vue-upload-multiple-image
                                @upload-success="uploadImageSuccess"
                                @before-remove="beforeRemove"
                                @edit-image="editImage"
                                :data-images="images"
                                >
                            </vue-upload-multiple-image>

                            <button type="submit">Add</button>
                        </form>
                    </div>
                    
                </b-modal>
        </div>
        <div class="hotel-list">

        </div>
    </div>
</template>

<script>
import json from '../city.json'
import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
    name: 'director',
    data() {
        return {
            
            hotel: {
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
            myJson: json
        
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
            console.warn("---------------")
        },
        uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    }
    },
    mounted() {
        this.fetchProvinces();
    },
    components: {
        VueUploadMultipleImage
    }
    
}
</script>

<style scoped>
    .director {
        padding-top: 12vh;
    }
    table tr th, td {
        border: 1px solid rgb(206, 203, 203);
    }

    #show-btn {
        background-color: aqua;
        color: blue;
    }

    form label {
        margin: 1vh auto;
    }

    form input, select {
        width: 35vw;
        height: 6vh;
    }

    [type="submit"] {
        width: 15vw;
        margin-top: 2vh;
        margin-left: 10vw;
        padding: 1vh 2vw;
        border: 1px solid grey;
        border-radius: 10px;
    }
    #my-strictly-unique-vue-upload-multiple-image {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
