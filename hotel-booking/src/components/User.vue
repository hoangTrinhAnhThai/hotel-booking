<template>
    <div class="user-comp">
        <home1-comp/>
    </div>
</template>

<script>

import Home1 from './Home1.vue'

export default {
    name: 'User',
    data() {
        return {
            imgInf: {
                id: null,
                image: "" 
            },
            user: null
        }
    },
    components: {
        'home1-comp': Home1,
    },


    async created() {
         this.axios.get('user/', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })

        this.axios.get('director/hotel/13/getImg')
        .then((result) => {
            localStorage.setItem('img', result.data[0].img)

            this.imgInf.id = result.data[0].id;
            this.imgInf.image = 'data:image/jpeg;base64,' + localStorage.getItem('img');
        })
    }
}
</script>

<style scoped>
    img {
        height: 15vh;
    }
    
</style>
