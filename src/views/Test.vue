<template>
        <header class="header flex items-center justify-center max-w-7xl mx-auto py-32 px-16">
            <div class="bg-red-200 flex flex-col md:block items-center">
                <h3 class="mb-12 md:mb-0 md:w-2/3 text-4xl lg:text-6xl font-extrabold font-playfair leading-snug">Simplifying user <br> experiences through <br> digital solutions</h3>
                <div class="mb-16 md:mb-0 md:transform md:-translate-y-16"><img src="../assets/solutions.png" alt="Creative solutions image"></div>
                <div class="md:flex md:w-1/2 md:ml-auto -translate-y-20 text-sm lg:text-lg">Aise is a User Experience designer focused on maximizing <br> business need and user satisfaction through the creation of <br> simple digital experiences.</div>
            </div>
        </header>
</template>

<script>
// import NavbarDark from '../components/NavbarDark'
export default {
    name: "Doorstep",
    // components: {NavbarDark},
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