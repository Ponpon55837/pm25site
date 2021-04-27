import { createStore } from "vuex" 

const SET_SHOWVIEW = 'SET_SHOWVIEW'

const store = createStore({
  state () {
    return {
      showView: false,
      setApiUrl: '',
    }
  },
  mutations: { 
    [SET_SHOWVIEW] (state) { 
      state.showView = !state.showView
    },
  } 
})

export default store