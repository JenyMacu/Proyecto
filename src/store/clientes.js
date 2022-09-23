import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,

  state: {
    Item:[],
  },

  getters: {
    Item(state){
    return state.Items;
    }
  },

  mutations: {
    LlenarItems(state, data){
        state.Items = data;
    }
  },

  actions: {
    cargarClientes: async function([commit]){
        try {
            const setting={
                method: 'GET',
            }
            const url = 'https://api.github.com/repos/';
            const data = await fetch(url, setting);
            const json = await data.json();
            commit('LlenarItems', json)
            
        } catch (error) {
            console.log(error);
        }
    }
  },
  modules: {
  }
}
