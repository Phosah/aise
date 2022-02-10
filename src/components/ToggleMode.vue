<template>
  <div class="flex items-center justify-center">
    <div class="w-8 p-2 bg-gray-200 rounded-2xl">
        <div class="mb-2"><button><img class="min-w-min" src="../assets/light-mode.png" alt="Light mode button"></button></div>
        <div><button @click="changeMode()"><img class="min-w-min" src="../assets/dark-mode.png" alt="Dark mode button"></button></div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isDark: true
        }
    },
    method: {
        changeMode() {
            this.$emit("change-mode")
        }
    }
}
</script>

<style>

</style>