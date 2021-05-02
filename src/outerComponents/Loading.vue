<template>
  <div 
    v-if="!matchContent.length && searchContent === '' && loadState" 
    class="flex">
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        aria-hidden="true" role="img" 
        class="iconify iconify--mdi animate-spin flex-grow my-5 text-blue-800 rotateLoading" 
        fill="none" 
        width="64" 
        height="64" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 24 24">
        <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" fill="currentColor"></path>
    </svg>
    </div>
    <div 
        v-if="!matchContent.length && searchContent !== ''" 
        class="text-center">
        沒有搜尋到相應的結果...
    </div>
    <div v-if="error" class="text-center">
      {{ error }}
    </div>
</template>

<script>
export default {
  name: 'Loading',
  props: { 
    matchContent: Array || Object,
    searchContent: String,
    loadState: Boolean,
    error: null,
  },
}
</script>
