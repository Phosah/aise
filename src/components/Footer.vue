<template>
  <div
    v-if="themeColor === 'light'"
    class="flex justify-between max-w-7xl mx-auto px-4 md:px-16 py-3 text-brand-black-1 font-semibold"
  >
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-brand-black-1"
      href="https://www.linkedin.com/in/aise-idahor-4353b1188/"
      target="_blank"
    >LinkedIn</a>
    <a
      class="pb-2 border-b-4 border-transparent hover:border-2 hover:border-brand-black-1"
      href="https://dribbble.com/Aise_Idahor"
      target="_blank"
    >Dribble</a>
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-brand-black-1"
      href="https://twitter.com/Aise_Idahor"
      target="_blank"
    >Twitter</a>
  </div>

  <div
    v-else
    class="flex justify-between max-w-7xl mx-auto px-4 md:px-16 py-3 text-white font-semibold"
  >
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-white"
      href="https://www.linkedin.com/in/aise-idahor-4353b1188/"
      target="_blank"
    >LinkedIn</a>
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-white"
      href="https://dribbble.com/Aise_Idahor"
      target="_blank"
    >Dribble</a>
    <a
      class="pb-2 border-b-4 border-transparent hover:border-b-4 hover:border-white"
      href="https://twitter.com/Aise_Idahor"
      target="_blank"
    >Twitter</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    }
  },
}
</script>