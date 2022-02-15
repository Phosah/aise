<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: 'App',
  components: {
    Navbar
}
}
</script>

<style>
@font-face {
  font-family: "Euclid Circular A";
  src: local("Euclid Circular A"),
   url('./fonts/Euclid-Circular-A-Light.ttf') format("OpenType");
}
</style>