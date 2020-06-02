import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    txt: '今天天气很热！',
    msg: "Welcome！ 韩金辉 ",
    flag: false,
    num: 2020
  },
  mutations: {
    modifyWeather(state, payload) {
      state.txt = payload
    },
    modifyInfo(state, payload) {
      state.msg = payload.msg,
        state.flag = payload.flag
    },
    add(state, payload) {
      state.num += payload
    },
    reduce(state, payload) {
      state.num -= payload
    }                                     //第四步
  },
  actions: {
    modifyWeather({ commit }, payload) {
      commit('modifyWeather', payload)
    },
    modify({ commit }, payload) {
      commit('modifyInfo', payload)
    },
    add({ commit }, payload) {
      commit('add', payload)
    },
    reduce({ commit }, payload) {
      commit('reduce', payload)
    }                                 //第三步
  },
  modules: {
  }
})
