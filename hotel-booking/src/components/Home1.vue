<template>
    <div class="home1">
        <seach-comp/>
        <infor-home/>
    </div>
</template>

<script>
import Search from './Search.vue'
import InforHome from './InforHome.vue'
export default {
    name: 'home1',
    components: {
        'seach-comp': Search,
        'infor-home': InforHome
    }
}
</script>

<style>

</style>
