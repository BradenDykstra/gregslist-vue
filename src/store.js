import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    currentCar: {},
    jobs: [],
    currentJob: {}
  },
  mutations: {
    setCars(state, payload) {
      state.cars = payload
    },
    setCurrentCar(state, payload) {
      state.currentCar = payload
    },
    setJobs(state, payload) {
      state.jobs = payload
    },
    setCurrentJob(state, payload) {
      state.currentJob = payload
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
    },
    async makeCar({ dispatch }, payload) {
      try {
        let res = await api.post(`/cars`, payload)
        dispatch('getCars')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteCar({ dispatch }, payload) {
      try {
        let res = await api.delete(`/cars/` + payload)
        dispatch('getCars')
        router.push({ name: 'cars' })
      } catch (error) {
        console.error(error)
      }
    },
    async getJobs({ commit, dispatch }) {
      try {
        let res = await api.get('jobs')
        commit('setJobs', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getJobById({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/jobs/${payload.jobId}`)
        commit('setCurrentJob', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async makeJob({ dispatch }, payload) {
      try {
        let res = await api.post(`/jobs`, payload)
        dispatch('getJobs')
      } catch (error) {
        console.error(error)
      }
    },
    async deleteJob({ dispatch }, payload) {
      try {
        let res = await api.delete(`/jobs/` + payload)
        dispatch('getJobs')
        router.push({ name: 'jobs' })
      } catch (error) {
        console.error(error)
      }
    }
  }
})
