<template>
    <div class="user-booking-history">
        <!-- <user-header/> -->
        <booking-history/>
    </div>
</template>

<script>

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import UserHeader from './UserHeader.vue'
import BookingHistory from './BookingHistory.vue'

export default {
    name: 'user-booking-history',
    components: {
        // 'user-header': UserHeader,
        'booking-history': BookingHistory
    },
    async created() {
        this.$store.dispatch('headerShow', false)
    }
}
</script>

<style scoped>


    .booking-history {
         width: 100%;
        height: 100vh;
        left: 5vw;
    }
</style>
