<template>
    <div class="block md:hidden mb-8">
        <div class="flex-1 mb-4">
            <img
                class="w-full mr-auto"
                :src="require(`@/assets/${card.imgName}`)"
                alt="Survey photo"
            />
        </div>
        <div class="px-16">
            <Indicator
                :elements="cards"
                :currentElementIndex="currentElementIndex"
                :showElement="showElement"
            />
            <div class="flex-1 mt-8">
                <div class="flex items-center space-x-4 mb-8 font-bold">
                    <p class="mr-2">1.0</p>
                    <div class="h-8 border-r border-2"></div>
                    <div class="flex items-center">
                        <img
                            v-if="themeColor === 'light'"
                            class="w-12"
                            src="../assets/logo.png"
                            alt="Aise Logo"
                        />
                        <img v-else class="w-12" src="../assets/logo-dark.png" alt="Aise Logo" />
                        <p class>cunad</p>
                    </div>
                </div>
                <h3 class="mb-6 text-2xl">{{ card.testimonialName }}</h3>
                <p class="mb-6">{{ card.testimonialMessage }}</p>
                <div class="flex items-center space-x-6">
                    <img
                        v-if="themeColor === 'light'"
                        src="../assets/twitter.png"
                        alt="Twitter Logo"
                    />
                    <img v-else src="../assets/twitter-dark.png" alt="Twitter Logo" />
                    <img
                        v-if="themeColor === 'light'"
                        src="../assets/linkedin.png"
                        alt="LinkedIn Logo"
                    />
                    <img v-else src="../assets/linkedin-dark.png" alt="LinkedIn Logo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Indicator from "./Indicator.vue";
export default {
    name: "TestimonialCarouselMobile",
    props: {
        cards: Array,
    },
    data() {
        return {
            currentElementIndex: 0,
        }
    },
    components: { Indicator },
    computed: {
        themeColor() {
            return this.$store.state.themeColor
        },
        card() {
            return this.cards[this.currentElementIndex];
        }
    },
    methods: {
        showElement(elementIndex) {
            this.currentElementIndex = elementIndex;
        }
    }
}
</script>