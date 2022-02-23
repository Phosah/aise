<template>
  <div id="navbar" class="fixed w-full transition-all duration-1000 z-50 bg-transparent">
    <div class="flex justify-center h-16 md:h-16">
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
            <div class="w-1 h-96 bg-gray-300">
              <div :style="{ height: this.percent + '%' }" class="w-1 bg-gray-600"></div>
            </div>
          </div>
          <ToggleMode />
        </div>
      </div>
    </div>
    <div class="block md:hidden fixed top-0 h-1 bg-white w-full">
      <div :style="{ width: this.percent + '%' }" class="h-full bg-gray-600"></div>
    </div>
  </div>
  <!-- <div
    id="navbar"
    class="fixed md:hidden flex items-center justify-between w-full h-20 bg-red-300 opacity-40 ease-in-out duration-500"
  >
    <div>
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
    
    <div @click="openMenu()">
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
  </div>-->
</template>

<script>
import ToggleMode from './ToggleMode'
export default {
  name: 'Header',
  components: {
    ToggleMode
  },
  data() {
    return {
      percent: 0,
      color: 'bg-red-300',
    }
  },
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    },

  },
  methods: {
    openMenu() {
      return this.$store.commit('openMenu');
    },
    showNavbarOnScrollUp() {
      let prevScrollpos = window.scrollY;

      window.onscroll = () => {
        let currentScrollPos = window.scrollY;
        // console.log(prevScrollpos, currentScrollPos)
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-62px";
        }
        prevScrollpos = currentScrollPos;
        const totalHeight = document.body.scrollHeight;
        const screenHeight = screen.height;
        console.log(currentScrollPos, totalHeight, screenHeight);

        this.percent = ((currentScrollPos + screenHeight) / totalHeight) * 100;

        // if (this.percent > 40 && this.percent < 60) {
        //   this.color = "bg-blue-400";
        // } else {
        //   this.color = "bg-red-400";
        // }
      }
    }
  },
  created() {
    this.showNavbarOnScrollUp()
  }
}
</script>
