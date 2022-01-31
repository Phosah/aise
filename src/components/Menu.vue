<template>
<div id="close-menu" class="menu-overlay">
    <div class="max-w-7xl mx-auto bg-brand-black-1 text-white">
      <header class="flex flex-col h-screen p-2">
            <div class="flex items-center justify-between">
                <div><img class="w-14" src="../assets/logo-dark.png" alt="Logo icon"></div>
                <div @click="closeMenu()"><button><img class="w-8" src="../assets/close.png" alt="Close icon"></button></div>
            </div>
            <nav class="flex-1 flex items-center px-14">
                <div class="md:ml-16 text-3xl md:text-4xl lg:text-6xl font-bold">
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
    methods: {
        closeMenu () {
            const closeBtn = document.getElementById("close-menu");
            closeBtn.classList.add("hidden");
        }
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
.menu-overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.9);
    transition: 0.5s;
    /* overflow-y: hidden; */
}
/* .menu-content {
    position: relative; */
/* } */
</style>