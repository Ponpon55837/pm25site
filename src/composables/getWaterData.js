import { ref } from 'vue'

const getWaterData = () => {
  const waterData = ref([])
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
    await fetch(`https://data.epa.gov.tw/api/v1/acidr_p_01?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`)
      .then(res => res.json())
      .then(result => waterData.value = result.records)
      .catch(err => error.value = err.message)
  }
  // 這裡return的原因是因為為了在被使用時，可以用解構的方式呼叫
  return { waterData, error, jsonHandler }
}

export default getWaterData
