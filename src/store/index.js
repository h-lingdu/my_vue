import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    txt: '今天天气很热！',
    msg: "Welcome！ 韩金辉 ",
    flag: false
  },
  mutations: {
    modifyWeather(state, payload) {
      state.txt = payload
    },
    modifyInfo(state, payload) {
      state.msg = payload.msg,
      state.flag = payload.flag
    }
  },
  actions: {
    weather({ commit, dispatch }, payload) {
      commit('modifyWeather', payload)
    },
    modify({ commit, dispatch }, payload) {
      console.log(payload)
      commit('modifyInfo', payload)
    }
  },
  modules: {
  }
})
