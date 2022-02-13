<template>
  <div :class="$store.state.themeColor">
    <!-- <Navbar /> -->

    <!-- <div class="w-full h-32 bg-red-400 bg-opacity-70 fixed z-50">
      <div class="max-w-7xl mx-auto flex justify-between">
        <div>Logo</div>
        <div>MODE</div>
      </div>
    </div> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@font-face {
  font-family: "Euclid Circular A";
  src: local("Euclid Circular A"),
    url("./fonts/Euclid-Circular-A-Light.ttf") format("OpenType");
}
</style>