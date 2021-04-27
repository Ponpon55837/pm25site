import { useStore } from 'vuex'
import { computed } from 'vue'

const useView = () => {
    const store = useStore()
    const showView = computed(() =>store.state.showView)
    const loadView = () => store.commit("loadView")

    return { showView, loadView }
}

export default useView