<template>
    <div class="max-w-2xl mx-auto">
        <div class="container">
            <main class="slides">
                <section class="section-1"></section>
                <section class="section-2"></section>
                <section class="section-3">></section>
            </main>
        </div>
    </div>
</template>

<script>
// import NavbarDark from '../components/NavbarDark'
export default {
    name: "Doorstep",
    components: {},
    data() {
        return {
        
        }
    }
}
</script>

<style scoped>
body {
    overflow-y: hidden;
}
.slides {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    display: flex;
    overflow-x: scroll;
}
section {
    height: 100vh;
    min-width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    scroll-snap-align: start;
}
.section-1 {
    background-image: url(../assets/collect-africa-home.png);
}
.section-2 {
    background-image: url(../assets/doorstep-home.png);
}
.section-3 {
    background-image: url(../assets/bitpowr-home.png);
}
.container {
    scroll-snap-type: x mandatory;
}

</style>