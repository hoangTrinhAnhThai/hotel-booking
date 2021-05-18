<template>
    <div class="home-comp">
        <search-comp/>
        <infor-home/>
    </div>
</template>

<script>
import Search from "./Search.vue";
import InforHome from "./InforHome.vue";
export default {
    name: 'home-comp',
    data() {
        return {

        }
    },
    components: {
        'search-comp': Search,
        'infor-home': InforHome
    }
}
</script>

<style scoped>
    .infor-home {
        margin-top: 10vh;
    }

</style>
