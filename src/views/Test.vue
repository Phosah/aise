<template>
  <div class="max-w-6xl mx-auto">
      <NavbarDark />
        <header class="max-w-6xl mx-auto py-32">
            <div class="bg-yellow-200">
                <h3 class="w-2/3 text-5xl font-extrabold font-playfair bg-green-300 ">Simplifying user <br> experiences through <br> digital solutions</h3>
                <div class="mb-6 bg-blue-400"><img class="transform -translate-y-20" src="../assets/solutions.png" alt="Creative solutions image"></div>
                <div class="flex justify-end w-1/2 ml-auto -translate-y-24">Aise is a User Experience designer focused on maximizing business need and user satisfaction through the creation of simple digital experiences.</div>
            </div>
        </header>
    </div>
</template>

<script>
import NavbarDark from '../components/NavbarDark'
export default {
    name: "Doorstep",
    components: {NavbarDark},
    data() {
        return {
        
        }
    }
}
</script>

<style>

</style>