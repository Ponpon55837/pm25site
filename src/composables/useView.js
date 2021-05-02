import { useStore } from 'vuex'
import { computed } from 'vue'

const useView = () => {
    const store = useStore()

    const showView = computed(() => store.state.showView)
    const loadView = () => store.commit("SET_SHOWVIEW")

    const loadState = computed(() => store.state.loadState)
    const setLoadState = () => store.commit("SET_LOAD_STATE")

    const initAirUrl = store.state.setAirUrl
    const initHomeUrl = store.state.setHomeUrl
    const initWaterUrl = store.state.setWaterUrl

    return { showView, loadView, initAirUrl, initHomeUrl, initWaterUrl, loadState, setLoadState }
}

export default useView