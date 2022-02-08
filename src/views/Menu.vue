<template>
<div class="">
    <div class="menu-content max-w-7xl mx-auto">
      <header class="flex flex-col h-screen p-2 bg-red-200">
            <div class="flex items-center justify-between">
                <div><img class="w-14" src="../assets/logo-dark.png" alt="Logo icon"></div>
                <div><img class="w-8" src="../assets/close.png" alt="Close icon"></div>
            </div>
            <nav class="flex-1 flex items-center px-14">
                <div class="ml-16 text-2xl md:text-4xl lg:text-6xl font-bold">
                    <div class="nav-link-box flex items-center space-x-4 mb-10">
                        <div class="nav-link-line w-16 h-1 bg-white"></div>
                        <div><router-link to="/">Works</router-link></div>
                    </div>
                    <div class="nav-link-box flex items-center space-x-4 mb-10">
                        <div class="nav-link-line w-16 h-1 bg-white"></div>
                        <div><router-link to="/about">About me</router-link></div>
                    </div>
                    <div class="nav-link-box flex items-center space-x-4 mb-10">
                        <div class="nav-link-line w-16 h-1 bg-white"></div>
                        <div><router-link to="/">Contact me</router-link></div>
                    </div>
                    <div class="nav-link-box flex items-center space-x-4 mb-10">
                        <div class="nav-link-line w-16 h-1 bg-white"></div>
                        <div><router-link to="/">Resume</router-link></div>
                    </div>
                </div>
            </nav>
      </header>
  </div>
</div>
</template>

<script>
export default {
    mounted () {
        window.scrollTo(0, 0)
    }
}
</script>

<style>
div {
    font-family: "Euclid Circular A", sans-serif;
}
.nav-link-box:hover > .nav-link-line {
    display: block;
}
.nav-link-line {
    display: none;
}

</style>