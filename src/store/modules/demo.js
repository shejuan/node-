// import Vuex from 'vuex'
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
// import api from 'api'

export const storeName = 'demo'

let state = {
  name: '我是jane-----001',
  isLoading: false,
  tmpList: [],
}

let getters = getter(state, {
  getName: state => state.name
})

/** actions **/
let actions = action(state, {
  // async getTmpList({ commit }) {
  //     let res = await api.demo.getList()
  //     commit('setTmpList', res)
  // },

  doDemo ({ commit }, data) {
    commit('demo', data) // 'DEM' 即是调用一个回调函数
  },

  pageLoading({ commit }, loading) {
      state.isLoading = loading
  }
})

/** mutations **/
let mutations = mutation(state, {
  demo(state, data){
    state.name = data.paramer
  },

  setTmpList(state, data) {
      state.tmpList = data
  }
})

/** module store **/
let store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

/** exports **/
export let types = getTypes(store)
export let module = getModule(storeName)
export let Store = getStore(module, types)

export default store