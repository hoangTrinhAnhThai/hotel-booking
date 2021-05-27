import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: null,
    headerShow: true,
};

export default new Vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.user
        },
        headerShow: (state) => {
            return state.headerShow
        },
        listHotel: (state) => {
            return state.listHotel
        },
        city: (state) => {
            return state.city
        }
    },
    
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
        headerShow(context, headerShow) {
            context.commit('headerShow', headerShow)
        },
        listHotel(context, listHotel) {
            context.commit('listHotel', listHotel)
        },
        city(context, city) {
            context.commit('city', city)
        }
    },
    mutations: {
        user(state, user) {
            state.user = user;
        },
        headerShow(state, headerShow) {
            state.headerShow = headerShow;
        },
        listHotel(state, listHotel) {
            state.listHotel = listHotel;
        },
        city(state, city) {
            state.city = city;
        }
    }
})