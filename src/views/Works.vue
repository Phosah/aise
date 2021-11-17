<template>
    <div class="max-w-5xl mx-auto">
        <HeaderDark />
        <section>
            <h3>Simplifying user experiences through digital solutions</h3>
            <div><img src="../assets/solutions.png" alt="Creative solutions image"></div>
            <p>Aise is a User Experience designer focused on maximizing business need and user satisfaction through the creation of simple digital experiences.</p>
        </section>
        <section class="py-20">
            <h2>SOME WORKS</h2>
            <div class="flex items-center justify-between mb-12 py-8  bg-brand-blue-1">
                <div>
                    <h3 class="mb-4">Bitpowr</h3>
                    <p class="mb-8">Blockchain, Fintech B2B</p>
                    <p class="border-b">Case Study</p>
                </div>
                <div>
                    <img src="../assets/bitpowr-phone.png" alt="Bitpowr phone">
                </div>
                <div>
                    <img src="../assets/bitpowr-pc.png" alt="Bitpowr laptop">
                </div>
            </div>
            <div class="flex items-center justify-between mb-12  bg-brand-orange-1">
                <div>
                    <h3 class="mb-4">Trigle</h3>
                    <p class="mb-8">Food delivery, Commerce</p>
                    <p class="border-b">Case Study</p>
                </div>
                <div>
                    <img src="../assets/trigle-home.png" alt="Trigle home photo">
                </div>
            </div>
            <div class="flex items-center justify-between py-8 bg-brand-green-1">
                <div>
                    <h3 class="mb-4">Doorstep</h3>
                    <p class="mb-8">Logistics</p>
                    <p class="border-b">Case Study</p>
                </div>
                <div>
                    <img src="../assets/doorstep-pc.png" alt="Doorstep laptop">
                </div>
            </div>
        </section>
        <section class="py-20 bg-brand-black-1 text-white">
            <h2 class="mb-12">TESTIMONIALS</h2>
            <div class="flex items-center justify-between space-x-6 mb-8">
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
                    <div class="border-b border-2 w-16 border-red-200"></div>
                    <div class="border-b border-2 w-16 border-red"></div>
                    <div class="border-b border-2 w-16 border-red"></div>
                    <div class="border-b border-2 w-16 border-red"></div>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="rounded p-3"><img src="../assets/left-arrow.png" alt="Left arrow"></button>
                    <button class="rounded p-3 bg-red-200"><img src="../assets/right-arrow.png" alt="Right arrow"></button>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center py-20 text-brand-black-1">
            <div class="mb-8"><img src="../assets/project-talk-dark.png" alt="Project talk-dark"></div>
            <h3 class="mb-4">Let's talk about your project</h3>
            <p class="mb-4">It takes any designer to design a product, but it takes creative <span>identification of users needs, and business goals to design the future</span></p>
            <button class="p-3 text-brand-black-1 bg-white">Book an appointment</button>
        </section>
        <FooterDark />
  </div>
</template>

<script>
import HeaderDark from '../components/HeaderDark.vue'
import FooterDark from '../components/FooterDark.vue'
export default {
    components: { HeaderDark, FooterDark }
}
</script>