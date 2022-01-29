<template>
    <div class="">
        <div class="flex justify-center space-x-2">
            <!-- Left Sidebar -->
            <div class="z-10 relative w-14 lg:w-16">
                <div class="absolute bg-yellow-200">
                    <div class="fixed">
                        <div class="bg-white"><img class="w-14 lg:w-16" src="../assets/logo-dark.png" alt="Menu toggle icon"></div>
                    </div>
                </div>
            </div>
            <!-- End of left sidebar -->

            <!-- Header -->
            <div class="dark:bg-brand-black-1">
                <header class="h-screen flex items-center justify-center max-w-7xl mx-auto mb-10 md:mb-0 py-32 md:px-16">
                    <div class="flex flex-col md:block items-center">
                        <h3 class="mb-12 md:mb-0 md:w-2/3 px-16 md:px-0 text-3xl md:text-4xl lg:text-6xl dark:text-white font-extrabold font-playfair leading-snug">Simplifying user <br> experiences through <br> digital solutions</h3>
                        <div class="mb-16 md:mb-0 md:transform md:-translate-y-16"><img src="../assets/solutions.png" alt="Creative solutions image"></div>
                        <div class="md:flex md:w-1/2 md:ml-auto px-16 md:px-0 -translate-y-20 text-sm lg:text-lg dark:text-white">Aise is a User Experience designer focused on maximizing <br> business need and user satisfaction through the creation of <br> simple digital experiences.</div>
                    </div>
                </header>
            </div>
            <!-- End of Header -->
            
            <!-- Right Sidebar -->
            <div class="z-10 relative w-14 lg:w-26">
                <div class="item absolute bg-red-600">
                    <div class="fixed">
                        <div class="">
                            <div class="mb-10 bg-white"><img class="w-14 lg:w-26" src="../assets/menu-icon-dark.png" alt="Aise Logo"></div>
                            <div class="flex items-center justify-center mb-10">
                                <div class="w-1 h-96 bg-gray-400"><div class="w-1 h-28 bg-gray-200"></div></div>
                            </div>
                            <div class="flex items-center justify-center">
                                <div class="w-8 p-2 bg-gray-200 rounded-2xl">
                                    <div class="mb-2"><button><img class="min-w-min" src="../assets/light-mode.png" alt="Light mode button"></button></div>
                                    <div><button><img class="min-w-min" src="../assets/dark-mode.png" alt="Dark mode button"></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of right sidebar -->
        </div>
        <!-- Main page -->
        <main class="max-w-7xl mx-auto mb-32 md:px-16">
            <h2 class="works-header dark:works-header-dark mb-6 md:mb-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-transparent text-center md:text-left">SOME WORKS</h2>
            <section class="works-box md:flex md:items-center md:justify-between mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-blue-8 text-white">
                <div class="flex-1 md:text-left text-center">
                    <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
                        <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">Collect Africa</h2>
                        <p class="mb-12 text-xl lg:text-3xl font-light">Fintech Solution</p>
                        <router-link to="/collectafrica" class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2">Case Study</router-link>
                    </div>
                </div>
                <div class="flex-1">
                    <img src="../assets/collect-africa-home.png" alt="Collect home photo">
                </div>
            </section>
            <section class="works-box md:flex md:items-center md:justify-between mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-orange-1 text-white">
                <div class="flex-1 md:text-left text-center">
                    <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
                        <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">Trigle</h2>
                        <p class="mb-12 text-xl lg:text-3xl font-light">Food delivery, Commerce</p>
                        <router-link to="/trigle" class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2">Case Study</router-link>
                    </div>
                </div>
                <div class="flex-1">
                    <img src="../assets/trigle-home.png" alt="Trigle home photo">
                </div>
            </section>
            <section class="works-box md:flex md:items-center md:justify-between mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-green-1 text-white">
                <div class="flex-1  md:text-left text-center">
                    <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
                        <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">Doorstep</h2>
                        <p class="mb-12 text-xl lg:text-3xl font-light">Logistics</p>
                        <router-link to="/doorstep" class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2">Case Study</router-link>
                    </div>
                </div>
                <div class="flex-1">
                    <img src="../assets/doorstep-home.png" alt="Trigle home photo">
                </div>
            </section>
            <section class="works-box md:flex md:items-center md:justify-between mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-red-5 text-white">
                <div class="flex-1 md:text-left text-center">
                    <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
                        <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">TrustBreed</h2>
                        <p class="mb-12 text-xl lg:text-3xl font-light">Customer Service, B2C</p>
                        <router-link to="/trustbreed" class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2">Case Study</router-link>
                    </div>
                </div>
                <div class="flex-1">
                    <img src="../assets/trustbreed-home.png" alt="Trustbreed home photo">
                </div>
            </section>
            <section class="works-box md:flex md:items-center md:justify-between mb-20 py-28 px-14 md:px-0 bg-hero-image bg-no-repeat bg-cover bg-brand-blue-1 text-white">
                <div class="flex-1 md:text-left text-center">
                    <div class="md:ml-16 mb-20 md:mb-0 md:pr-6">
                        <h2 class="mb-4 text-3xl lg:text-5xl font-semibold font-playfair">Powr Finance</h2>
                        <p class="mb-12 text-xl lg:text-3xl font-light">Logistics</p>
                        <router-link to="/powrfinance" class="inline-block pb-1 text-xl lg:text-2xl font-semibold border-b-2">Case Study</router-link>
                    </div>
                </div>
                <div class="flex flex-1 justify-end">
                    <div><img class="" src="../assets/powrfinance-home.png" alt="Powr Finance devices"></div>                   
                </div>
            </section>
        </main>
        <section class="flex items-center md:min-h-screen py-20 dark:bg-white bg-text-brand-black-1 bg-brand-black-1 text-white dark:text-brand-black-1">
            <div class="hidden md:block max-w-7xl mx-auto md:px-16">
                <h2 class="testimonials-header dark:testimonials-header-dark mb-20 md:mb-8 text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center md:text-left text-transparent">TESTIMONIALS</h2>
                <div class="md:flex md:items-center md:justify-between md:space-x-12 mb-8">
                    <div class="flex-1 mb-8 md:mb-0"><img class="w-full mx-auto object-cover" src="../assets/testimonial-man.png" alt="Testimonial man"></div>
                    <div class="flex-1 px-16 md:px-0">
                        <div class="flex items-center space-x-4 mb-12 text-2xl">
                            <p class="mr-2">1.0</p>
                            <div class="h-14 border-r border-2"></div>
                            <div class="flex items-end pb-2">
                                <img src="../assets/logo.png" alt="Aise Logo">
                                <p class="pb-2">cunad</p>
                            </div>
                        </div>
                        <h3 class="mb-8 text-2xl md:text-3xl">Emma Dorsey</h3>
                        <p class="mb-8">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                        <div class="flex items-center space-x-6">
                            <img src="../assets/twitter.png" alt="Twitter Logo">
                            <img src="../assets/linkedin.png" alt="LinkedIn Logo">
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-12 px-16 md:px-0 dark:text-brand-black-1">
                    <div class="flex flex-1 space-x-4">
                        <div class="border-b border-2 w-1/4"></div>
                        <div class="border-b border-2 w-1/4"></div>
                        <div class="border-b border-2 w-1/4"></div>
                        <div class="border-b border-2 w-1/4"></div>
                    </div>
                    <div class="flex-1 flex items-center justify-end space-x-4">
                        <button class="rounded p-3"><img src="../assets/left-arrow.png" alt="Left arrow"></button>
                        <button class="rounded-full p-4 bg-white"><img src="../assets/right-arrow.png" alt="Right arrow"></button>
                    </div>
                </div>
            </div>
            <div class="block md:hidden max-w-7xl mx-auto">
                <h2 class="testimonials-header mb-20 text-5xl sm:text-6xl  text-center text-transparent">TESTIMONIALS</h2>
                <div class="mb-8">
                    <div class="flex-1 mb-4"><img class="w-full mx-auto object-cover" src="../assets/testimonial-man.png" alt="Testimonial man"></div>
                    <div class="flex flex-1 space-x-4 mb-10 px-16">
                        <div class="border-b border-2 w-1/4"></div>
                        <div class="border-b border-2 w-1/4"></div>
                        <div class="border-b border-2 w-1/4"></div>
                        <div class="border-b border-2 w-1/4"></div>
                    </div>
                    <div class="flex-1 px-16">
                        <div class="flex items-center space-x-4 mb-12 text-2xl">
                            <p class="mr-2">1.0</p>
                            <div class="h-14 border-r border-2"></div>
                            <div class="flex items-end pb-2">
                                <img src="../assets/logo.png" alt="Aise Logo">
                                <p class="pb-2">cunad</p>
                            </div>
                        </div>
                        <h3 class="mb-8 text-2xl">Emma Dorsey</h3>
                        <p class="mb-8">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
                        <div class="flex items-center space-x-6">
                            <img src="../assets/twitter.png" alt="Twitter Logo">
                            <img src="../assets/linkedin.png" alt="LinkedIn Logo">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center max-w-7xl mx-auto py-32 md:py-20 md:px-16 text-brand-black-1 dark:text-white">
            <div class="mb-24"><img src="../assets/project-talk-dark.png" alt="Project talk-dark"></div>
            <div class="px-16 md:px-0">
                <h3 class="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center md:text-left font-semibold">Let's talk about your project</h3>
                <p class="mb-16 md:text-xl font-light text-center">It takes any designer to design a product, but it takes creative <span class="font-bold">identification of <br> users needs, and business goals to design the future</span></p>
            </div>
            <button class="px-8 py-5 font-bold rounded-sm text-white dark:text-brand-black-1 bg-brand-black-1 dark:bg-white">Book an appointment</button>
        </section>
        <div class="max-w-7xl mx-auto">
            <FooterDark />
        </div>
        <!-- End of Main page -->
    </div>
</template>

<script>
import FooterDark from '../components/FooterDark.vue'
export default {
    components: {FooterDark }
}
</script>

<style scoped>
div {
    font-family: "Euclid Circular A", sans-serif;
}
.works-header {
    color: #000;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0E0F14;
}
.works-header-dark {
    color: #fff;
    -webkit-text-fill-color: #0E0F14;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
}
@media screen and (min-width: 768px) { 
    .works-box {
        height: 650px;
    }
}
.testimonials-header {
    color: #fff;
    -webkit-text-fill-color: #0E0F14;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
}
.testimonials-header-dark {
    color: #0E0F14;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0E0F14;
}
</style>