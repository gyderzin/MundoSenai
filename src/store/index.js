import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugins/axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    circuitos: []
  },
  getters: {
    circuitos(state) {
      return state.circuitos
    }
  },
  mutations: {
    circuitos(state, payload) {
      payload.forEach(element => {
        state.circuitos.push(element)        
      })      
    },
    updatedCircuito(state, payload) {
      let resultado = state.circuitos.find((circuito) => circuito.id === payload.id)
      resultado.estado = payload.estado     
    } 
  },
  actions: {
    getCircuitos({commit}) {
      axios.get('/circuitos').then(res => {
        commit('circuitos', res.data)
      })
    },
    changeCircuito({commit}, payload) {      
      axios.put('/changeCircuitos', payload).then(() => { 
        commit('updatedCircuito', payload)
      })
    }
  },
 
})
