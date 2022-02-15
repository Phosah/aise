<template>
  <div class="fixed w-full z-10 bg-transparent bg-opacity-60">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div>
        <router-link to="/">
          <img class="w-14 lg:w-16" src="../assets/logo-dark.png" alt="Menu toggle icon" />
        </router-link>
      </div>

      <!-- Right Sidebar -->
      <div>
        <div @click="openMenu" class="mb-10">
          <button>
            <img class="w-14 lg:w-26" src="../assets/menu-icon-dark.png" alt="Aise Logo" />
          </button>
        </div>
        <div class="flex items-center justify-center mb-10">
          <div class="w-1 h-96 bg-gray-400">
            <div class="w-1 h-28 bg-gray-200"></div>
          </div>
        </div>
        <ToggleMode />
      </div>
      <!-- End of right sidebar -->
    </div>
  </div>
</template>

<script>
import ToggleMode from './ToggleMode'
export default {
  name: 'Header',
  components: {
    ToggleMode
  },

  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    }
  },
}
</script>
