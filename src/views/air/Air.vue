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

      <Loading 
        :matchContent='matchContent' 
        :searchContent='searchContent' 
        :loadState='loadState' 
        :error='error' />

      <div class="right" @click="jumpTop">
        <span class="text">Top</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue'
import SingleAir from './SingleAir.vue'
import Loading from '../../outerComponents/Loading.vue'
import getData from '../../composables/getData.js'
import { useState } from '../../composables/state.js'
import useView from '../../composables/useView'

const { showView, loadView, initAirUrl, loadState } = useView()
const [passSite, setPassSite] = useState('')
const searchContent = ref('')
const { originData, error, jsonHandler } = getData()

watchEffect(() => {
  jsonHandler(initAirUrl)
})

const matchContent = computed(() => {
  return originData.value.sort((x,y) => x.ForecastDate > y.ForecastDate).sort((a,b) => a === b).filter(e => e.Area.includes(searchContent.value))
})

const jumpTop = () => window.scrollTo(0, 0)
</script>
