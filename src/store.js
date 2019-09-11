import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    currentCar: {}
  },
  mutations: {
    setCars(state, payload) {
      state.cars = payload
    },
    setCurrentCar(state, payload) {
      state.currentCar = payload
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await api.get('cars')
        commit('setCars', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCarById({ commit, dispatch }, payload) {
      let res = await api.get(`/cars/${payload.carId}`)
      commit('setCurrentCar', res.data.data)
    }
  }
})
