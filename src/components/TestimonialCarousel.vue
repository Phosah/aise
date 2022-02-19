<template>
    <div class="hidden md:block">
        <TestimonialCard
            :imgName="currentElement.imgName"
            :testimonialName="currentElement.testimonialName"
            :testimonialMessage="currentElement.testimonialMessage"
        />
        <div class="flex items-center">
            <div class="flex-1">
                <Indicator
                    :elements="this.cards"
                    :currentElementIndex="this.currentElementIndex"
                    :showElement="this.showElement"
                />
            </div>
            <div class="flex-1 flex items-center justify-end space-x-4">
                <ArrowButton
                    arrowType="left"
                    @click="showPrevElement"
                    :disabled="this.reachedMaxLeft"
                />
                <ArrowButton
                    arrowType="right"
                    @click="showNextElement"
                    :disabled="this.reachedMaxRight"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TestimonialCard from "./TestimonialCard.vue";
import ArrowButton from "./ArrowButton.vue";
import Indicator from "./Indicator.vue";
export default {
    name: "Carousel",
    props: {
        cards: Array
    },
    components: {
        TestimonialCard,
        ArrowButton,
        Indicator
    },
    data() {
        return {
            currentElementIndex: 0,
        }
    },
    computed: {
        currentElement() {
            return this.cards[this.currentElementIndex];
        },
        reachedMaxLeft() {
            return this.currentElementIndex === 0;

        },
        reachedMaxRight() {
            return this.currentElementIndex === this.cards.length - 1;
        }
    },
    methods: {
        showNextElement() {
            this.currentElementIndex++;
        },
        showPrevElement() {
            this.currentElementIndex--;
        },
        showElement(elementIndex) {
            this.currentElementIndex = elementIndex;
        }
    }
}
</script>