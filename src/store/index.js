import { createStore } from "vuex" 

const SET_SHOWVIEW = 'SET_SHOWVIEW'

const store = createStore({
  state () {
    return {
      showView: false,
      setAirUrl: `https://data.epa.gov.tw/api/v1/aqf_p_01?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`,
      setHomeUrl: `https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`,
      setWaterUrl: `https://data.epa.gov.tw/api/v1/acidr_p_01?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`,
    }
  },
  mutations: { 
    [SET_SHOWVIEW] (state) { 
      state.showView = !state.showView
    },
  } 
})

export default store