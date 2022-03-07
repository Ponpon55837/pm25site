<template>
  <div id="nav" @scroll='handleScroll' :class="{ opacityReduce: active }">
    <router-link :to="{ name: 'Home', params: {} }">PM 2.5</router-link>
    <router-link :to="{ name: 'Water', params: {} }">酸雨監測值</router-link>
    <router-link :to="{ name: 'Air', params: {} }">空氣品質</router-link>
  </div>
</template>

<script>
import { useState } from '../composables/state.js'

export default {
  created() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("scroll", this.handleScrollX)
  },
  setup() {
    const [active, setActive] = useState(false)
    const handleScroll = () => {
      if(window.scrollY > 20) {
        setActive(true)
      }else {
        setActive(false)
      }
    }

    return { active, handleScroll }
  }
}
</script>
