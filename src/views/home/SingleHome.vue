<template>
  <div @click="setShowHome(false)" class="backdrop">
    <div class="dropcontent">
      SingleHome
    </div>
  </div>
</template>

<script>
export default {
  props: ['site', 'setShowHome'],
  setup(props) {
    console.log(props.site)
  }
}
</script>
