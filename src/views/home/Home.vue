<template>
  <div class='main'>
    <div class="siteOuter">
      <div class="left">
        <label>搜尋城市：</label>
        <input type="text" v-model='searchContent' />
        <button type="button" @click="searchContent = ''">Clear</button>
      </div>
      <div v-if="matchContent">
        <div class="site" v-for="site in matchContent" :key="site.Site" @click="loadView(), setPassSite(site)">
          <h3>縣市名稱：{{ site.county }}</h3>
          <label>測站名稱：{{ site.Site }}</label>
        </div>
        <SingleHome v-if="showView" :passSite="passSite" />
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
import SingleHome from './SingleHome.vue'
import Loading from '../../outerComponents/Loading.vue'
import getData from '../../composables/getData.js'
import { useState } from '../../composables/state.js'
import useView from '../../composables/useView'

const { showView, loadView, initHomeUrl, loadState } = useView()
const [passSite, setPassSite] = useState('')
const searchContent = ref('')
const { originData, error, jsonHandler } = getData()

watchEffect(() => {
  jsonHandler(initHomeUrl)
})

const matchContent = computed(() => {
  // 如果searchMember的值有變動，進行計算，這邊是回返一個過濾過只包含目前searchMember有的值的陣列，當searchMember為空值，則會回返一個完整的members陣列
  // console.log(pmData.value.filter(item => item.includes('')))

  return originData.value.filter(e => e.county.includes(searchContent.value) || e.Site.includes(searchContent.value))
})

const jumpTop = () => window.scrollTo(0, 0)
</script>
