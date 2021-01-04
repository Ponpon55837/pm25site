<template>
  <div class=''>
    <h1>Water</h1>
    <div class="siteOuter">
      <div class="left">
        <label>搜尋城市：</label>
        <input type="text" v-model='searchContent' />
        <button type="button" @click="searchContent = ''">Clear</button>
      </div>

      <div v-if="waterData">
        <div class="site" v-for="(site, idx) in matchContent" :key="site.SiteId + idx" @click="setShowWater(true), setPassSite(site)">
          <h3>區域：{{ site.Area }}</h3>
          <h4>縣市名稱：{{ site.County }}</h4>
          <label>測站名稱：{{ site.Township }}</label>
        </div>
        <SingleWater v-if="showWater" :setShowWater="setShowWater" :passSite="passSite" />
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
import SingleWater from './SingleWater.vue'
import getWaterData from '../../composables/getWaterData.js'
import { useState } from '../../composables/state.js'

export default {
  name: "Water",
  components: { SingleWater },
  setup() {
    const [showWater, setShowWater] = useState(false)
    const [passSite, setPassSite] = useState('')
    const searchContent = ref('')
    const { waterData, error, jsonHandler } = getWaterData()

    watchEffect(() => {
      jsonHandler()
    }, () => {
      matchContent()
    })

    const matchContent = computed((pmData) => {
      // 如果searchMember的值有變動，進行計算，這邊是回返一個過濾過只包含目前searchMember有的值的陣列，當searchMember為空值，則會回返一個完整的members陣列
      // console.log(pmData.value.filter(item => item.includes('')))

      return waterData.value.filter(e => e.County.includes(searchContent.value) || e.Township.includes(searchContent.value) || e.Area.includes(searchContent.value))
    })

    const jumpTop = () => window.scrollTo(0, 0)

    return { waterData, error, matchContent, jumpTop, showWater, setShowWater, passSite, setPassSite, searchContent }
  }
}
</script>
