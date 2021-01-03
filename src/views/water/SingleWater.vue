<template>
  <div @click="setShowWater(false)" class="backdrop">
    <div class="dropcontent">
      <h3>區域：{{ passSite.Area }}</h3>
      <h3>縣市名稱：{{ passSite.County }} {{ passSite.Township }}</h3>
      <label>酸雨pH值：{{ passSite.Result_Value ? passSite.Result_Value : '未檢測' }}mm</label><br />
      <label>負責單位： {{ passSite.Agency_Name }}</label><br />
      <label>檢測日期： {{ passSite.Monitor_Date }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['passSite', 'setShowWater'],
  setup(props) {

  }
}
</script>
