<template>
  <div>
      <Card 
        :imgName="currentElement.imgName"       
      />
  </div>
</template>

<script>
import Card from "./Card.vue"
export default {
    name: "Carousel",
    props: {
        cards: Array
    },
    components: {
        Card
    },
    data() {
        return {
            currentElementIndex: 0,       
        }
    }, 
    computed: {
        currentElement() {
            return this.cards[this.currentElementIndex];
        }
    },
}
</script>