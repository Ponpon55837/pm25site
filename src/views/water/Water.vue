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
        <div class="site" v-for="(site, idx) in matchContent" :key="site.SiteId + idx" @click="loadView(), setPassSite(site)">
          <h3>區域：{{ site.Area }}</h3>
          <h4>縣市名稱：{{ site.County }}</h4>
          <label>測站名稱：{{ site.Township }}</label>
        </div>
        <SingleWater v-if="showView" :passSite="passSite" />
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

<script>
import { ref, watchEffect, computed } from 'vue'
import SingleWater from './SingleWater.vue'
import Loading from '../../outerComponents/Loading.vue'
import getData from '../../composables/getData.js'
import { useState } from '../../composables/state.js'
import useView from '../../composables/useView'

export default {
  name: "Water",
  components: { SingleWater, Loading },
  setup() {
    const { showView, loadView, initWaterUrl, loadState } = useView()
    const [passSite, setPassSite] = useState('')
    const searchContent = ref('')
    const { originData, error, jsonHandler } = getData()

    watchEffect(() => {
      jsonHandler(initWaterUrl)
    })

    const matchContent = computed(() => {
      return originData.value.filter(e => e.County.includes(searchContent.value) || e.Township.includes(searchContent.value) || e.Area.includes(searchContent.value))
    })

    const jumpTop = () => window.scrollTo(0, 0)

    return { originData, error, matchContent, jumpTop, showView, loadView, loadState, passSite, setPassSite, searchContent }
  }
}
</script>
