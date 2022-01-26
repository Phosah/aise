<template>
    <div class="wrapper flex bg-green-700 relative">
        <!-- Left Sidebar -->
        <div class="absolute">
            <div class="fixed bg-red-200"><img class="w-16 lg:w-20" src="../assets/logo-dark.png" alt="Aise Logo"></div>
        </div>
        <!-- Main page -->
        <div class="flex-1">
            <div class="max-w-7xl mx-auto bg-gray-400 h-screen"></div>
            <div class="h-56 bg-yellow-600">This is a rough start</div>
        </div>
        <!-- Right Sidebar -->
        <div class="absolute">
            <div class="fixed bg-green-300"><img class="w-16 lg:w-20" src="../assets/menu-icon-dark.png" alt="Menu toggle icon"></div>
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

<style>
.wrapper {
    width: 1500px;
    margin: 0 auto;
}
.sidebar {
    width: 24px;
    left: 95%;
}
.header {
    height: calc(100vh - 80px);
}
.heading-box {
    display: flex;
    justify-content: center;
}
.heading {
    display: flex;
    justify-content: center;
    display: inline-block;
    text-align: center;
    font-size: 30px;
    background-color: chocolate;
    margin-top: 10px;
}
</style>