<template>
  <div @click="loadView()" class="backdrop">
    <div class="dropcontent dropPm">
      <h2>縣市名稱：{{ passSite.county }}</h2>
      <label>測站名稱：{{ passSite.Site }}</label>
      <p>PM 2.5 濃度：{{ passSite.PM25 }} {{ passSite.ItemUnit }}</p>
      <p>記錄時間： {{ passSite.DataCreationDate }}</p>
    </div>
  </div>
</template>

<script>
import useView from '../../composables/useView'

export default {
  props: ['passSite'],
  setup(props) { 
    const { loadView } = useView()

    return { loadView }
  }
}
</script>
