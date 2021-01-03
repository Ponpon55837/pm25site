import { ref } from 'vue'

const getData = () => {
  const pmData = ref([])
  const error = ref(null)
  const jsonHandler = async () => {
    // try {
    //   const data = await fetch(`https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`)
    //   if(!data.ok) {
    //     throw Error('no available data')
    //   }
    //   pigData.value = await data.json()
    // }
    // catch(err){
    //   error.value = err.message
    // }
    // await fetch(`https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`)
    //   .then(res => res.json())
    //   .then(result => pmData.value = result.records)
    //   .catch(err => error.value = err.message)
    try {
      const response = await fetch(`https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`);
      const result = await response.json()
      console.log(result.records)
      return pmData.value = result.records
    } catch (err) {
      return error.value = err.message
    }
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { pmData, error, jsonHandler }
}

export default getData
