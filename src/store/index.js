import { createStore } from "vuex" 

const store = createStore({
  state () {
    return {
      showView: false,
    }
  },
  mutations: { 
    loadView (state) { 
      state.showView = !state.showView
    }
  } 
})

export default store