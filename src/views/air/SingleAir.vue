<template>
  <div @click="loadView()" class="backdrop">
    <div class="dropcontent dropAir">
      <h3>地區：{{ passSite.Area }}</h3>
      <label>AQI：{{ passSite.AQI }}</label><br />
      <label>懸浮微粒：{{ passSite.MajorPollutant ? passSite.MajorPollutant : '未記錄' }}</label><br />
      <label>記錄時間： {{ passSite.PublishTime }}</label>
      <p>空氣品質：{{ passSite.Content }}</p>
    </div>
  </div>
</template>

<script>
import useView from '../../composables/useView'

export default {
  props: ['passSite'],
  setup() {
    const { loadView } = useView()

    return { loadView }
  }
}
</script>
