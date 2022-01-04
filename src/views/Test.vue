<template>
  <div class="max-w-6xl mx-auto">
      <!-- <NavbarDark /> -->
        <!-- <header class="max-w-6xl mx-auto py-32">
            <div class="bg-yellow-200">
                <h3 class="w-2/3 text-5xl font-extrabold font-playfair bg-green-300 ">Simplifying user <br> experiences through <br> digital solutions</h3>
                <div class="mb-6 bg-blue-400"><img class="transform -translate-y-20" src="../assets/solutions.png" alt="Creative solutions image"></div>
                <div class="flex justify-end w-1/2 ml-auto -translate-y-24">Aise is a User Experience designer focused on maximizing business need and user satisfaction through the creation of simple digital experiences.</div>
            </div>
        </header> -->
        <!-- <div class="bg-blue-600 text-right text-white text-2xl">Hello Osasuyi</div>
        <div class="flex items-start">
            <p class="text-red-600 text-center w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, esse. Molestiae ipsam nulla reprehenderit, sit eligendi illum voluptate magnam incidunt culpa reiciendis rerum cupiditate suscipit, illo nostrum blanditiis eveniet possimus.</p>
            <img class="bg-green-300 w-72" src="../assets/business-goals.png" alt="">
        </div>
        <div class="heading-box">
            <h1 class="heading">This is a heading</h1>
        </div> -->
        <section class="flex items-center h-screen py-20 bg-brand-black-1 text-white">
            <div class="max-w-7xl mx-auto px-16">
                <h2 class="testimonials-header mb-8 text-9xl text-transparent">TESTIMONIALS</h2>
                <div class="flex items-center justify-between space-x-12 mb-8">
                    <div class="flex-1"><img src="../assets/testimonial-man.png" alt="Testimonial man"></div>
                    <div class="flex-1">
                        <div class="flex items-end space-x-4 mb-8 text-2xl">
                            <p class="pb-2">1.0</p>
                            <div class="h-14 border-r border-2"></div>
                            <div class="flex items-end">
                                <img src="../assets/logo.png" alt="Aise Logo">
                                <p class="pb-2">cunad</p>
                            </div>
                        </div>
                        <h3 class="mb-4">Emma Dorsey</h3>
                        <p class="mb-4">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                        <div class="flex items-center space-x-6">
                            <img src="../assets/twitter.png" alt="Twitter Logo">
                            <img src="../assets/linkedin.png" alt="LinkedIn Logo">
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex space-x-4">
                        <div class="border-b border-2 w-12 border-red-200"></div>
                        <div class="border-b border-2 w-12 border-red"></div>
                        <div class="border-b border-2 w-12 border-red"></div>
                        <div class="border-b border-2 w-12 border-red"></div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="rounded p-3"><img src="../assets/left-arrow.png" alt="Left arrow"></button>
                        <button class="rounded-full p-3 bg-white"><img src="../assets/right-arrow.png" alt="Right arrow"></button>
                    </div>
                </div>
            </div>
        </section>
    </div>
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