<template>
  <div class="md:fixed w-full z-10 bg-transparent">
    <div class="flex justify-center h-16">
      <div class="mr-8">
        <router-link to="/">
          <img
            v-if="themeColor === 'light'"
            class="w-14 lg:w-16"
            src="../assets/logo-dark.png"
            alt="Menu toggle icon"
          />
          <img v-else class="w-14 lg:w-16" src="../assets/logo.png" alt="Menu toggle icon" />
        </router-link>
      </div>
      <div class="md:block flex-1 max-w-7xl"></div>
      <div class="ml-8">
        <div @click="openMenu()" class="mb-10">
          <button>
            <img
              v-if="themeColor === 'light'"
              class="w-14 lg:w-26"
              src="../assets/menu-icon-dark.png"
              alt="Aise Logo"
            />
            <img v-else class="w-14 lg:w-26" src="../assets/menu-icon.png" alt="Aise Logo" />
          </button>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center justify-center mb-10">
            <div class="w-1 h-96 bg-gray-400">
              <div class="w-1 h-28 bg-gray-200"></div>
            </div>
          </div>
          <ToggleMode />
        </div>
      </div>
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
    },
  },
  methods: {
    openMenu() {
      return this.$store.commit('openMenu');
    }
  }
}
</script>
