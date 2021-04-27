<template>
  <div class='main'>
    <!-- <h1>Home</h1> -->

    <div class="siteOuter">
      <div class="left">
        <label>搜尋城市：</label>
        <input type="text" v-model='searchContent' />
        <button type="button" @click="searchContent = ''">Clear</button>
      </div>
      <div v-if="originData">
        <div class="site" v-for="site in matchContent" :key="site.Site" @click="loadView(), setPassSite(site)">
          <h3>縣市名稱：{{ site.county }}</h3>
          <label>測站名稱：{{ site.Site }}</label>
        </div>
        <SingleHome v-if="showView" :passSite="passSite" />
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
import SingleHome from './SingleHome.vue'
import getData from '../../composables/getData.js'
import { useState } from '../../composables/state.js'
import { useStore } from 'vuex'

export default {
  name: "Home",
  components: { SingleHome },
  setup() {
    const url = `https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json`
    const store = useStore()
    const showView = computed(() => store.state.showView)
    const loadView = () => store.commit("loadView")
    const [passSite, setPassSite] = useState('')
    const searchContent = ref('')
    const { originData, error, jsonHandler } = getData()

    watchEffect(() => {
      jsonHandler(url)
    })

    const matchContent = computed(() => {
      // 如果searchMember的值有變動，進行計算，這邊是回返一個過濾過只包含目前searchMember有的值的陣列，當searchMember為空值，則會回返一個完整的members陣列
      // console.log(pmData.value.filter(item => item.includes('')))

      return originData.value.filter(e => e.county.includes(searchContent.value) || e.Site.includes(searchContent.value))
    })

    const jumpTop = () => window.scrollTo(0, 0)

    return { originData, error, matchContent, jumpTop, showView, loadView, passSite, setPassSite, searchContent }
  }
}
</script>
