<template>
  <div class='main'>
    <!-- <h1>Water</h1> -->
    <div class="siteOuter">
      <div class="left">
        <label>搜尋城市：</label>
        <input type="text" v-model='searchContent' />
        <button type="button" @click="searchContent = ''">Clear</button>
      </div>

      <div v-if="originData">
        <div class="site" v-for="(air, idx) in matchContent" :key="air + idx" @click="loadView(), setPassSite(air)">
          <h3>{{ air.Area }}</h3>
          <h4>{{ air.MajorPollutant ? air.MajorPollutant : '未記錄' }}</h4>
          <label>{{ air.PublishTime }}</label>
        </div>
        <SingleAir v-if="showView" :passSite="passSite" />
      </div>
      <div v-else>
        Data is loading...
      </div>

      <div class="right" @click="jumpTop">
        <span class="text">Top</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, computed } from 'vue'
import SingleAir from './SingleAir.vue'
import getData from '../../composables/getData.js'
import { useState } from '../../composables/state.js'
import useView from '../../composables/useView'

export default {
  name: 'Air',
  components: { SingleAir },
  setup() {
    const  url = `https://data.epa.gov.tw/api/v1/aqf_p_01?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`
    const { showView, loadView } = useView()
    const [passSite, setPassSite] = useState('')
    const searchContent = ref('')
    const { originData, error, jsonHandler } = getData()

    watchEffect(() => {
      jsonHandler(url)
    })

    const matchContent = computed(() => {
      return originData.value.sort((x,y) => x.ForecastDate > y.ForecastDate).sort((a,b) => a === b).filter(e => e.Area.includes(searchContent.value))
    })

    const jumpTop = () => window.scrollTo(0, 0)

    return { originData, error, matchContent, jumpTop, showView, loadView, passSite, setPassSite, searchContent }
  }
}
</script>
