<template>
    <section
        id
        class="flex flex-col items-center max-w-7xl mx-auto py-32 md:py-20 md:px-16 text-brand-black-1 dark:text-white"
    >
        <div class="mb-24">
            <img
                v-if="themeColor === 'light'"
                src="../assets/project-talk.png"
                alt="Project talk-dark"
            />
            <img v-else src="../assets/project-talk-dark.png" alt="Project talk-dark" />
        </div>
        <div class="md:w-5/6 mx-auto px-16 md:px-0">
            <h3
                class="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-semibold font-playfair"
            >Let's talk about your project</h3>
            <p class="mb-16 md:text-xl font-light text-center">
                It takes any designer to design a product, but it takes creative
                <span
                    class="font-bold"
                >identification of users needs, and business goals to design the future</span>
            </p>
        </div>
        <!-- Calendly link widget begin -->
        <a
            class="px-8 py-5 font-bold rounded-sm text-white dark:text-brand-black-1 bg-brand-black-1 dark:bg-white"
            href
            onclick="Calendly.initPopupWidget({url: 'https://calendly.com/aiseidahor'});return false;"
        >Book an appointment</a>
        <!-- Calendly link widget end -->
    </section>
</template>

<script>
export default {
    name: 'BookAppointment',
    computed: {
        themeColor() {
            return this.$store.state.themeColor;
        }
    },
}
</script>