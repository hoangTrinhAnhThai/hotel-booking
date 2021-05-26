<template>
    <div class="home-comp">
        <header-comp/>
        <home1-comp/>
    </div>
</template>

<script>
import Header from './Header.vue'
import Home1 from './Home1.vue'

export default {
    name: 'home-comp',
    data() {
        return {
            // login: 'Login',
            // signup: 'SignUp'
        }
    },
    components: {
        'header-comp': Header,
        'home1-comp': Home1
    }, 
    computed() {
        localStorage.setItem('login', "Login");
        localStorage.setItem('signup', 'Signup');
    }
}
</script>

<style scoped>
    

</style>
