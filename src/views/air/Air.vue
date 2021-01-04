<template>
  <div class='main'>
    <!-- <h1>Water</h1> -->
    <div class="siteOuter">
      <div class="left">
        <label>搜尋城市：</label>
        <input type="text" v-model='searchContent' />
        <button type="button" @click="searchContent = ''">Clear</button>
      </div>

      <div v-if="airData">
        <div class="site" v-for="(air, idx) in matchContent" :key="air + idx" @click="setShowAir(true), setPassSite(air)">
          <h3>{{ air.Area }}</h3>
          <h4>{{ air.MajorPollutant ? air.MajorPollutant : '未記錄' }}</h4>
          <label>{{ air.PublishTime }}</label>
        </div>
        <SingleAir v-if="showAir" :passSite="passSite" :setShowAir="setShowAir" />
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
import getAirData from '../../composables/getAirData.js'
import { useState } from '../../composables/state.js'

export default {
  name: 'Air',
  components: { SingleAir },
  setup() {
    const [showAir, setShowAir] = useState(false)
    const [passSite, setPassSite] = useState('')
    const searchContent = ref('')
    const { airData, error, jsonHandler } = getAirData()

    watchEffect(() => {
      jsonHandler()
    }, () => {
      matchContent()
    })

    const matchContent = computed(() => {
      return airData.value.sort((x,y) => x.ForecastDate > y.ForecastDate).sort((a,b) => a === b).filter(e => e.Area.includes(searchContent.value))
    })

    const jumpTop = () => window.scrollTo(0, 0)

    return { airData, error, matchContent, jumpTop, showAir, setShowAir, passSite, setPassSite, searchContent }
  }
}
</script>
