<template>
    <div class="director-room">
        <director-header/>
        <div class="rooms">
            <div class="img-hotel">
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
                            <div class="phongtrong">
                                <h2>Phong trong</h2>
                                <b-button id="show-btn" v-on:click="openAddRoomForm" @click="$bvModal.show('bv-modal-example')">Add new hotel</b-button>
                <b-modal id="bv-modal-example" hide-footer>
                    <div class="add">
                        <form @submit.prevent="addNewRoom(100000)" method="post" enctype="multipart/form-data">
                            <label for="">Ten phong</label><br>
                            <input type="text" v-model="roomRequest.name" required><br>
                            <label for="">Type</label><br>
                            <input required type="text" v-model="roomRequest.type"><br>
                            <label for="">Capcity</label><br>
                            <input required type="text" v-model="roomRequest.capacity" @keypress="onlyNumber"><br>
                            <label for="">Price</label><br>
                            <input required type="text" v-model="roomRequest.price" @keypress="onlyNumber"><br>
                            <label for="">Area</label><br>
                            <input required type="text" v-model="roomRequest.area" @keypress="onlyNumber"><br>
                            <label for="">Description</label><br>
                            <input required type="text" v-model="roomRequest.description" ><br>

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
                            <button type="submit">Save</button>
                        </form>
                                        
                    </div>
            </b-modal>
                                <div v-for="(i, index) in hotel.rooms" v-bind:key="i.id" class="showphong">
                                    <div class="img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpkYg1zz3HDe9JfM6qIP7IHMmj4PNUPJZhA&usqp=CAU" alt="">
                                    </div>
                                    <div class="infor">
                                        <h3>{{i.name}}</h3>
                                        <h6>{{i.type}}</h6>
                                        <h6>{{i.description}}</h6>
                                        <h6>{{i.price}}</h6>
                                        <h6>Capacity: {{i.capacity}}</h6>
                                    </div>
                                    <div class="chucnang">
                                        <button id="show-btn" v-on:click="openEditRoom(index)" v-b-modal="modalId(index)"><i class="fas fa-edit"></i></button>
                                            <b-modal :id="'modal'+ index" hide-footer>
                    <div class="add">
                        <form @submit.prevent="addNewRoom(i.id)" method="post" enctype="multipart/form-data">
                            <label for="">Ten phong</label><br>
                            <input type="text" v-model="roomRequest.name" required><br>
                            <label for="">Type</label><br>
                            <input required type="text" v-model="roomRequest.type"><br>
                            <label for="">Capcity</label><br>
                            <input required type="text" v-model="roomRequest.capacity" @keypress="onlyNumber"><br>
                            <label for="">Price</label><br>
                            <input required type="text" v-model="roomRequest.price" @keypress="onlyNumber"><br>
                            <label for="">Area</label><br>
                            <input required type="text" v-model="roomRequest.area" @keypress="onlyNumber"><br>
                            <label for="">Description</label><br>
                            <input required type="text" v-model="roomRequest.description" ><br>

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
                            <button type="submit">Save</button>
                        </form>
                                        
                    </div>
            </b-modal>
                                <button v-on:click="deleteHotel(i.id)"><i class="far fa-trash-alt"></i></button>

                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import DirectorHeader from './DirectorHeader.vue'

export default {
    name: 'director-room',
    data() {
        return {
            hotelId: null,
            hotel: null,
            roomRequest: {
                name: null,
                type: null,
                price: null,
                area: null,
                description: null,
                capacity: null
            },
            files: []
        }
    },
    methods: {
        modalId(index) {
            return 'modal' + index
        },
        onlyNumber ($event) {
            //console.log($event.keyCode); //keyCodes value
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
                $event.preventDefault();
            }
        },

        openAddRoomForm() {
            this.files = []
            this.roomRequest.name = null
            this.roomRequest.type = null
            this.roomRequest.price = null
            this.roomRequest.area = null
            this.roomRequest.capacity =null
            this.roomRequest.description =null
        },
        addNewRoom(roomId) {

            const formData = new FormData();
            for( var i = 0; i < this.files.length; i++ ){
                formData.append('images', this.files[i]);
                console.warn(this.files[i])
            }
            formData.append('roomRequest', JSON.stringify(this.roomRequest))

            if(roomId == 100000) {
                this.axios.post(`director/hotel/${this.hotelId}/new-room`, formData,  {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                }) 
                .then((response) => {
                    console.warn(response);
                })
            } else {
                this.axios.post(`director/hotel/${this.hotelId}/${roomId}/update/save`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                })
                .then((response) => {
                    console.warn(response);
                })
            }
            // this.$router.go()
        },

        openEditRoom(index) {
            this.files = []
            this.roomRequest.name = this.hotel.rooms[index].name
            this.roomRequest.type = this.hotel.rooms[index].type
            this.roomRequest.capacity = this.hotel.rooms[index].capacity
            this.roomRequest.price = this.hotel.rooms[index].price
            this.roomRequest.area = this.hotel.rooms[index].area
            this.roomRequest.description = this.hotel.rooms[index].description

            for(var p = 0; p < (this.hotel.rooms[index].images).length; p++) {
                var byteString = atob(this.hotel.rooms[index].images[p].img);
                var ia = new Uint8Array(byteString.length);
                for (var l = 0; l < byteString.length; l++) {
                    ia[l] = byteString.charCodeAt(l);
                }           
                var myFile = this.blobToFile(new Blob([ia], {type:'image/jpeg'}), "my-image.png");
                this.files.push(myFile)
            }
            console.warn(this.files.length)
        },

        selectFile(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.files = ([...this.files, ...files ]);
        },

        convert(file) {
            return URL.createObjectURL(file)
        }, 
        deleteImg(index) {
            (this.files).splice(index, 1);
            console.warn(this.files.length)
        },
        blobToFile(theBlob, fileName){
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            theBlob.lastModifiedDate = new Date();
            theBlob.name = fileName;
            return theBlob;
        },
        deleteHotel(roomId) {
            this.axios.delete(`director/hotel/${this.hotelId}/${roomId}/delete`)
            .then((response) => {
                console.warn(response.data)
            })
            // this.$router.go(0)
        },

    },

    async created() {
        this.hotelId = localStorage.getItem('hotelId');
        console.warn(this.hotelId)
        this.axios.get(`director/hotel/${this.hotelId}`) 
        .then((response) => {
            this.hotel = response.data
            console.warn(response.data)
        })
    },
    components: {
        'director-header': DirectorHeader
    }
}
</script>

<style scoped>
    .director-room .rooms {
        margin-left: 22vw;
    }

    .director-header {
        float: left;
        width: 20vw;
        height: 100vh;
        background-color: rgb(114,167,207);
        position: fixed;
    }

    .director-room .img {
        margin: 0 auto;
        background-color:aqua;
    }

    .director-room .img .img2 img{
        width: 35vw;
        float: left;
        height: 45vh;
        margin-right: 1vw;

    }

    .director-room .img .img4 img {
        width: 17vw;
        height: 21vh;
    }

    .director-room .img .img4 .img4-1 img {
        margin-bottom: 3vh;
    }

    ul {
        list-style: none;
        padding-top: 5vh;
    }

    ul li {
        margin-bottom: 4vh;
    }

    .content {
        clear: both;
        padding-top: 15vh;
        margin-left: 5vw;
    }

    .phongtrong .showphong {
        overflow: hidden;
        border: 1px solid rgb(209, 206, 206);
        padding: 4vh 3vw;
        border-radius: 10px;
        margin-top: 5vh;
        width: 65vw;

    }

    .phongtrong .img img {
        height: 25vh;
        width: 18vw;
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
        width: 4vw;
        margin-bottom: 2vh;
    }

    .phongtrong .chucnang .add {
        margin: 0 auto;
        background-color: blue;
    }
    .phongtrong .infor h3 {
        border-bottom: 2px solid rgb(224, 112, 112);
        padding-bottom: 2vh;
    }

    .phongtrong .infor h6 {
        text-align: start;
        margin-top: 2vh;
    }

    .level-left img {
        height: 15vh;
        width: 15vw;
    }
    button {
        font-size: 1.2vw;
        border: 0.5px solid gray;
        background-color: #92b6c5;
        border-radius: 10px;
        padding: 1vh;
        width: 10vw
    }

    .phongtrong .chucnang {
        float: right;
        width: 10vw;
        margin-bottom: 2vh;
    }

    .chucnang button {
        width: 4.5vw;
    }

    .chucnang #show-btn {
        width: 4.5vw;
        margin-right: 1vw;
    }

    /* ------------ */

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
</style>
