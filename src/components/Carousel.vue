<template>
  <div>
      <Card 
        :imgName="currentElement.imgName"       
      />
      <div>
          <div>
              <Indicator 
                :elements="this.cards"
                :currentElementIndex="this.currentElementIndex"
                :showElement="this.showElement"
              />
          </div>
          <div>
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
import Card from "./Card.vue"
import ArrowButton from "./ArrowButton.vue"
import Indicator from "./Indicator.vue"
export default {
    name: "Carousel",
    props: {
        cards: Array
    },
    components: {
        Card,
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