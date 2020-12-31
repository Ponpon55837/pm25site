<template>
  <div @click="showHome = false" class="backdrop">
    <div class="dropcontent">
      <h2>縣市名稱：{{ site.county }}</h2>
      <label>測站名稱：{{ site.Site }}</label>
      <p>PM 2.5 濃度：{{ site.PM25 }} {{ site.ItemUnit }}</p>
      <p>記錄時間： {{ site.DataCreationDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['site', 'showHome']
}
</script>
