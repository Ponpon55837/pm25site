import { useStore } from 'vuex'
import { computed } from 'vue'

const useView = () => {
    const store = useStore()
    const showView = computed(() =>store.state.showView)
    const loadView = () => store.commit("SET_SHOWVIEW")

    const initAirUrl = store.state.setAirUrl
    const initHomeUrl = store.state.setHomeUrl
    const initWaterUrl = store.state.setWaterUrl

    return { showView, loadView, initAirUrl, initHomeUrl, initWaterUrl }
}

export default useView