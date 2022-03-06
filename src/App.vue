<template>
  <Nav />
  <div class="backCircle"></div>
  <div class="backCircle2"></div>
  <!-- 這裡的router-view會抓取Nav當中router-link的連結做為內容輸出 -->
  <router-view />

  <Footer />
</template>

<script setup>
import Nav from './outerComponents/Nav.vue'
import Footer from './outerComponents/Footer.vue'
</script>
