import { createStore } from "vuex" 

const SET_SHOWVIEW = 'SET_SHOWVIEW'
const SET_LOAD_STATE =  'SET_LOAD_STATE'

const store = createStore({
  state () {
    return {
      showView: false,
      loadState: true,
      setAirUrl: `https://data.epa.gov.tw/api/v1/aqf_p_01?limit=1000&api_key=${process.env.VUE_APP_API_KEY}&format=json`,
      setHomeUrl: `https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=${process.env.VUE_APP_API_KEY}&format=jsonn`,
      setWaterUrl: `https://data.epa.gov.tw/api/v1/acidr_p_01?limit=1000&api_key=${process.env.VUE_APP_API_KEY}&format=json`,
    }
  },
  mutations: { 
    [SET_SHOWVIEW] (state) { 
      state.showView = !state.showView
    },
    [SET_LOAD_STATE] (state) { 
      state.showView = !state.showView
    },
  } 
})

export default store