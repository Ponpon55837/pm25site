<template>
  <div @click="loadView()" class="backdrop">
    <div class="dropcontent dropWater">
      <h3>區域：{{ passSite.Area }}</h3>
      <h3>縣市名稱：{{ passSite.County }} {{ passSite.Township }}</h3>
      <label>酸雨pH值：{{ passSite.Result_Value ? passSite.Result_Value : '未檢測' }}mm</label><br />
      <label>負責單位： {{ passSite.Agency_Name }}</label><br />
      <label>檢測日期： {{ passSite.Monitor_Date }}</label>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: ['passSite'],
  setup() {
    const store = useStore()
    const loadView = () =>store.commit('loadView')

    return { loadView }
  }
}
</script>
