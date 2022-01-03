<template>
    <div class="">
        <div class="max-w-7xl mx-auto">
            <NavbarDark />
        </div>
        <header class="header flex items-center justify-center max-w-7xl mx-auto py-32 px-16">
            <div class="">
                <h3 class="w-2/3 text-6xl font-extrabold font-playfair">Simplifying user <br> experiences through <br> digital solutions</h3>
                <div class="transform -translate-y-16"><img src="../assets/solutions.png" alt="Creative solutions image"></div>
                <div class="flex w-1/2 ml-auto -translate-y-20">Aise is a User Experience designer focused on maximizing <br> business need and user satisfaction through the creation of <br> simple digital experiences.</div>
            </div>
        </header>
        <main class="max-w-7xl mx-auto mb-32 px-16">
            <h2 class="works-header mb-28 text-9xl text-transparent">SOME WORKS</h2>
            <section class="works-box flex items-center justify-between mb-20 py-8 bg-hero-image bg-no-repeat bg-cover bg-brand-blue-1 text-white">
                <div class="flex-1">
                    <div class="w-2/3 mx-auto">
                        <h2 class="mb-4 text-xl font-semibold">Bitpowr</h2>
                        <p class="mb-8 font-light">Blockchain, Fintech B2B</p>
                        <p class="inline-block font-semibold border-b">Case Study</p>
                    </div>
                </div>
                <div class="flex flex-1">
                    <div><img src="../assets/bitpowr-phone.png" alt="Bitpowr phone"></div>
                    <div><img src="../assets/bitpowr-pc.png" alt="Bitpowr laptop"></div>                   
                </div>
            </section>
            <section class="works-box flex items-center justify-between mb-20 bg-hero-image bg-no-repeat bg-cover bg-brand-orange-1 text-white">
                <div class="flex-1">
                    <div class="w-2/3 mx-auto">
                        <h2 class="mb-4 text-xl font-semibold">Trigle</h2>
                        <p class="mb-8 font-light">Food delivery, Commerce</p>
                        <p class="inline-block font-semibold border-b">Case Study</p>
                    </div>
                </div>
                <div class="flex-1">
                    <img src="../assets/trigle-home.png" alt="Trigle home photo">
                </div>
            </section>
            <section class="works-box flex items-center justify-between mb-20 py-8 bg-hero-image bg-no-repeat bg-cover bg-brand-green-1 text-white">
                <div class="flex-1">
                    <div class="w-2/3 mx-auto">
                        <h2 class="mb-4 text-xl font-semibold">Doorstep</h2>
                        <p class="mb-8 font-light">Logistics</p>
                        <p class="inline-block font-semibold border-b">Case Study</p>
                    </div>
                </div>
                <div class="flex-1">
                    <img src="../assets/doorstep-pc.png" alt="Trigle home photo">
                </div>
            </section>
        </main>
        <section class="py-20 bg-brand-black-1 text-white">
            <div class="max-w-7xl mx-auto px-16">
                <h2 class="testimonials-header mb-16 text-6xl lg:text-7xl text-transparent">TESTIMONIALS</h2>
                <div class="flex items-center justify-between space-x-12 mb-8">
                    <div class=""><img src="../assets/testimonial-man.png" alt="Testimonial man"></div>
                    <div>
                        <div class="flex items-center space-x-4 mb-8">
                            <p>1.0</p>
                            <div class="h-8 border-r border-2"></div>
                            <div class="flex items-center space-x-2">
                                <img src="../assets/logo.png" alt="Aise Logo">
                                <p>cunad</p>
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
        <section class="flex flex-col items-center max-w-7xl mx-auto py-20 text-brand-black-1">
            <div class="mb-24"><img src="../assets/project-talk-dark.png" alt="Project talk-dark"></div>
            <h3 class="mb-8 text-5xl font-semibold">Let's talk about your project</h3>
            <p class="mb-16 text-xl font-light text-center">It takes any designer to design a product, but it takes creative <span class="font-bold">identification of users needs, and business goals to design the future</span></p>
            <button class="px-8 py-5 font-bold rounded-sm text-white bg-brand-black-1">Book an appointment</button>
        </section>
        <div class="max-w-7xl mx-auto">
            <FooterDark />
        </div>
  </div>
</template>

<script>
import NavbarDark from '../components/NavbarDark.vue'
import FooterDark from '../components/FooterDark.vue'
export default {
    components: { NavbarDark, FooterDark }
}
</script>

<style scoped>
.header {
    height: calc(100vh - 80px);
}
.works-header {
    color: #000;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0E0F14;
}
.works-box {
    height: 550px;
}
.testimonials-header {
    color: #fff;
    -webkit-text-fill-color: #0E0F14;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
}
</style>