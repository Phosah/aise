<template>
  <div :class="themeColor">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    }
  },
}
</script>

<style>
@font-face {
  font-family: "Euclid Circular A";
  src: local("Euclid Circular A"),
    url("./fonts/Euclid-Circular-A-Light.ttf") format("OpenType");
}
.header-box {
  height: 600px;
}
</style>