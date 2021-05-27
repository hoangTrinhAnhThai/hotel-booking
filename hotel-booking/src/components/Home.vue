<template>
    <div class="home-comp">
        <!-- <header-comp/> -->
        <home1-comp/>
    </div>
</template>

<script>
import Home1 from './Home1.vue'
// import Header from './Header.vue'

export default {
    name: 'home-comp',
    data() {
        return {
        }
    },
    components: {
        'home1-comp': Home1,
        // 'header-comp' : Header
    },
    async created () {
        this.$store.dispatch('headerShow', true)
    }
}
</script>

<style scoped>
    

</style>
