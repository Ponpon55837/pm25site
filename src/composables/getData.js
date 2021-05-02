import { ref } from 'vue'
import axios from 'axios'
import useView from './useView'

const getData = () => {
  const originData = ref([])
  const error = ref(null)

  const { loadState ,setLoadState, loadView } = useView()
  const jsonHandler = async (url) => {

    axios.defaults.timeout = 1

    await axios.get(url)
    .then(res => {
      return originData.value = res.data.records
    })
    .catch(err => {
      loadView()
      setLoadState()
      return error.value = err.message
    })
    .finally(() => {
      return loadState
    })
    // try {
    //   const response = await fetch(url);
    //   const result = await response.json()
    //   return originData.value = result.records
    // } catch (err) {
    //   return error.value = err.message
    // }
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { originData, error, jsonHandler }
}

export default getData
