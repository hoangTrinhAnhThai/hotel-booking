<template>
    <div class="search-comp">
        <div class="description">
            <h1>
                You will be making a wise business decision when choosing the <span style="color: rgb(248,219,172)">IrtAoh --iah_thna</span>
            </h1>
        </div>
        <div class="search-form">
            <div class="where">
                <div class="label">Where are you going?</div>
                <div class="render">
                    <select name="" id="">
                        <option value="dalat">Da Lat</option>
                        <option value="danang">Da Nang</option>
                        <option value="hochiminh">Ho Chi Minh</option>
                        <option value="hanoi">Ha Noi</option>
                    </select>
                </div>
            </div>
            <div class="from">
                <div class="label">From</div>
                <div class="render">
                    <input type="date">
                </div>
            </div>
            <div class="to">
                <div class="label">To</div>
                <div class="render">
                    <input type="date">
                </div>
            </div>
            <div class="guest">
                <div class="label">Guest</div>
                <div class="render">
                    <input type="number" min="1" value="1">
                </div>
            </div>
            <div class="search">
                <input type="button" value="SEARCH">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'search-comp',
    data() {
        return {

        }
    },
    components: {
        
    }
}
</script>

<style scoped>

    .search-comp {
        color: black;
        background-image: url("https://wall.vn/wp-content/uploads/2019/11/hinh-anh-phong-canh-da-lat-1.jpg");
        background-position: center;
        background-size: cover;
        height: 100vh;
        max-width: 100vw;
        /* position: relative; */
    }

    .search-comp .description {
        color: white;
        width: 70vw;
        padding-top: 15vh;
        padding-left: 5vw;
    }

    .search-comp .search-form {
        overflow: hidden;
        width: 55vw;
        margin-top: 13vh;
        margin-left: 42vw;
        background-color: white;
        padding: 3vh 0vw;
        border-radius: 4px;
    }

    .search-comp .search-form .where, .from, .to, .guest, .search {
        float: left;
        margin-left: 2vw;
    }

    .search-comp .search-form select {
        width: 11vw;
        border: 0;
    }

    [type="date"] {
        background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  95% 50% no-repeat ;
        border: 0;
        width: 11vw;
        /* margin-left: -4vw;  */
    }

    [type="date"]::-webkit-inner-spin-button {
        display: none;
    }

    [type="date"]::-webkit-calendar-picker-indicator {
        opacity: 0;
    }

    [type="number"] {
        width: 3vw;
        border: 0;
    }

    [type="button"] {
        width: 6vw;
        text-align: center;
        padding-left: 0.5vw;
        margin-top: 1.5vh;
        height: 2.5vw;
        background-color:  rgb(133, 179, 209);
        border-radius: 4px;
    }

</style>
