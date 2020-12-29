<template>
  <div class=''>
    <h1>Home</h1>
    <div class="siteOuter">
      <div class="left">
        <input type="text" v-model="seachContent" />
        <button type="button" @click="seachContent = ''">Clear</button>
      </div>
      <div class="site" v-for="site in pmData.records" :key="site.Site">
        <h2>縣市名稱：{{ site.county }}</h2>
        <label>測站名稱：{{ site.Site }}</label>
        <p>PM 2.5 濃度：{{ site.PM25 }} {{ site.ItemUnit }}</p>
        <p>記錄時間： {{ site.DataCreationDate }}</p>
      </div>
      <div class="right" @click="jumpTop">
        <span class="text">Top</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, computed } from 'vue'
import getData from '../composables/getData.js'

export default {
  name: "Home",
  setup() {
    const seachContent = ref('')
    const { pmData, error, jsonHandler } = getData()

    watchEffect(() => {
      jsonHandler()
    })

    const matchContent = computed(() => {
      // 如果searchMember的值有變動，進行計算，這邊是回返一個過濾過只包含目前searchMember有的值的陣列，當searchMember為空值，則會回返一個完整的members陣列
      return pmData.value.filter(item => item.includes(seachContent.value))
    })

    const jumpTop = () => window.scrollTo(0, 0)

    return { pmData, error, matchContent, jumpTop, seachContent }
  }
}
</script>
