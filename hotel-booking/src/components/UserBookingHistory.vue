<template>
    <div class="user-booking-history">
        <user-header/>
        <booking-history/>
    </div>
</template>

<script>

// import axios from 'axios'
// import VueAxios from 'vue-axios'
import UserHeader from './UserHeader.vue'
import BookingHistory from './BookingHistory.vue'

export default {
    name: 'user-booking-history',
    components: {
        'user-header': UserHeader,
        'booking-history': BookingHistory
    },
    async created() {
        this.$store.dispatch('headerShow', false)
    }
}
</script>

<style scoped>

    .user-header {
        float: left;
        width: 20vw;
        height: 100vh;
        background-color: rgb(114,167,207);
        position: fixed;
    }

    .booking-history {
         width: 74vw;
        position: absolute;
        left: 24vw;
    }
</style>
