<template>
  <div @click="setShowHome(false)" class="backdrop">
    <div class="dropcontent">
      <h2>縣市名稱：{{ passSite.county }}</h2>
      <label>測站名稱：{{ passSite.Site }}</label>
      <p>PM 2.5 濃度：{{ passSite.PM25 }} {{ passSite.ItemUnit }}</p>
      <p>記錄時間： {{ passSite.DataCreationDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['passSite', 'setShowHome'],
  setup(props) {

  }
}
</script>
