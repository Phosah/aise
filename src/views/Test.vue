<template>
    <div class="bg-red-300">
        <div class="max-w-7xl mx-auto bg-green-400">
            <NavbarDark/>
        </div>
        <section class="bg-yellow-400 max-w-7xl mx-auto px-16">
            <div class="h-72 bg-blue-300 max-w-6xl mx-auto">
            </div>
        </section>


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