<template>
    <div class="home-comp">
        <header-comp/>
        <router-view/> 
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: 'home-comp',
    data() {
        return {
            login: 'Login',
            signup: 'SignUp'
        }
    },
    components: {
        'header-comp': Header
    }
}
</script>

<style scoped>
    

</style>
