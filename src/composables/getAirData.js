import { ref } from 'vue'

const getAirData = () => {
  const airData = ref([])
  const error = ref(null)
  const jsonHandler = async () => {
    try {
      const response = await fetch(`https://data.epa.gov.tw/api/v1/aqf_p_01?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9
&format=json`);
      const result = await response.json()
      return airData.value = result.records
    } catch (err) {
      return error.value = err.message
    }
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { airData, error, jsonHandler }
}

export default getAirData
