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
        }
    },
    
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
        headerShow(context, headerShow) {
            context.commit('headerShow', headerShow)
        }
    },
    mutations: {
        user(state, user) {
            state.user = user;
        },
        headerShow(state, headerShow) {
            state.headerShow = headerShow;
        }
    }
})