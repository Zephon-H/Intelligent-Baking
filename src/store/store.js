import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homePageTimeValue: [new Date(2021, 10, 29, 10, 0), new Date(2021, 10, 29,11, 0)],
    },
    mutations: {
        setTimeValue(state, timeValue){
            state.homePageTimeValue = timeValue
        },
    },
})