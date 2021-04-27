import { useStore } from 'vuex'
import { computed } from 'vue'

const useView = () => {
    const store = useStore()
    const showView = computed(() =>store.state.showView)
    const loadView = () => store.commit("SET_SHOWVIEW")

    return { showView, loadView }
}

export default useView