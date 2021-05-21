<template>
    <div class="home1">
        <!-- <header-comp/> -->
        <seach-comp/>
        <infor-home/>
    </div>
</template>

<script>
// import Header from './Header.vue'
import Search from './Search.vue'
import InforHome from './InforHome.vue'
export default {
    name: 'home1',
    components: {
        // 'header-comp': Header,
        'seach-comp': Search,
        'infor-home': InforHome
    }
}
</script>

<style>

</style>
