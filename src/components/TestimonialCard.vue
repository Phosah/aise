<template>
    <div class="flex items-center md:justify-between md:space-x-12 mb-8">
        <div class="flex-1 mb-8 md:mb-0">
            <img class="w-full mr-auto" :src="require(`@/assets/${imgName}`)" alt="Survey photo" />
        </div>
        <div class="flex-1 px-16 md:px-0">
            <div class="flex items-center space-x-4 mb-12 text-2xl">
                <p class="mr-2">1.0</p>
                <div class="h-14 border-r border-2"></div>
                <div class="flex items-end pb-2">
                    <img v-if="themeColor === 'light'" src="../assets/logo.png" alt="Aise Logo" />
                    <img v-else src="../assets/logo-dark.png" alt="Aise Logo" />
                    <p class="pb-2">cunad</p>
                </div>
            </div>
            <h3 class="mb-8 text-2xl md:text-3xl">{{ testimonialName }}</h3>
            <p class="mb-8">{{ testimonialMessage }}</p>
            <div class="flex items-center space-x-6">
                <img v-if="themeColor === 'light'" src="../assets/twitter.png" alt="Twitter Logo" />
                <img v-else src="../assets/twitter-dark.png" alt="Twitter Logo" />
                <img v-if="themeColor === 'light'" src="../assets/linkedin.png" alt="LinkedIn Logo" />
                <img v-else src="../assets/linkedin-dark.png" alt="LinkedIn Logo" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TestimonialCarousel",
    props: {
        imgName: String,
        testimonialName: String,
        testimonialMessage: String
    },
    computed: {
        themeColor() {
            return this.$store.state.themeColor;
        }
    },
}
</script>