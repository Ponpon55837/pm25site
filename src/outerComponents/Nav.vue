<template>
  <div id="nav" @scroll='handleScroll' :class="{ opacityReduce: active }">
    <router-link :to="{ name: 'Home', params: {} }">PM 2.5</router-link>
    <router-link :to="{ name: 'Water', params: {} }">酸雨監測值</router-link>
    <router-link :to="{ name: 'Air', params: {} }">空氣品質</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
  created() {
      window.addEventListener("scroll", this.handleScroll);
    },
  methods: {
    handleScroll() {
      this.active = window.scrollY > 20 ? true : false
    }
  }
}
</script>
