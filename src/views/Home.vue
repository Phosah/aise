<template>
  <div class="dark:bg-brand-black-1">
    <!-- Header -->
    <div class="dark:bg-brand-black-1">
      <header
        class="h-screen flex items-center justify-center max-w-7xl mx-auto mb-10 md:mb-0 py-32 md:px-16"
      >
        <div class="flex flex-col md:block items-center">
          <h3
            class="mb-12 md:mb-0 md:w-2/3 px-4 md:px-0 text-3xl md:text-4xl lg:text-6xl dark:text-white font-extrabold font-playfair leading-snug"
          >Simplifying user experiences through digital solutions</h3>
          <div class="mb-16 md:mb-0 md:transform md:-translate-y-16">
            <img
              v-if="themeColor == 'light'"
              src="../assets/solutions.png"
              alt="Creative solutions image"
            />
            <img v-else src="../assets/solutions-dark.png" alt="Creative solutions image" />
          </div>
          <div
            class="md:flex md:w-1/2 md:ml-auto px-4 md:px-0 -translate-y-20 text-sm lg:text-lg dark:text-white"
          >Aise is a User Experience designer focused on maximizing business need and user satisfaction through the creation of simple digital experiences.</div>
        </div>
      </header>
    </div>
    <!-- End of Header -->
    <!-- Main page -->
    <main class="max-w-7xl mx-auto mb-32 md:px-16">
      <h2
        :class="themeColor === 'light' ? 'works-header' : 'works-header-dark'"
        class="dark:works-header-dark mb-6 md:mb-2 text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-transparent text-center md:text-left"
      >SOME WORKS</h2>
      <div v-for="(work, ix) in worksArray" :key="ix">
        <Works :work="work" />
      </div>
    </main>
    <section
      class="flex items-center md:min-h-screen py-20 dark:bg-white bg-text-brand-black-1 bg-brand-black-1 text-white dark:text-brand-black-1"
    >
      <div class="max-w-7xl mx-auto w-full md:px-16">
        <h2
          :class="themeColor === 'light' ? 'testimonials-header-dark' : 'testimonials-header'"
          class="testimonials-header dark:testimonials-header-dark mb-20 md:mb-8 text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center md:text-left text-transparent"
        >TESTIMONIALS</h2>
        <TestimonialCarousel :cards="cards" />
        <!-- Mobile version -->
        <TestimonialCarouselMobile :cards="cards" />
      </div>
    </section>
    <BookAppointment />
    <!-- End of Main page -->
  </div>
</template>

<script>
import Works from '../components/Works.vue'
import BookAppointment from '../components/BookAppointment.vue'
import TestimonialCarousel from '../components/TestimonialCarousel.vue';
import TestimonialCarouselMobile from '../components/TestimonialCarouselMobile.vue';
export default {
  components: { BookAppointment, TestimonialCarousel, TestimonialCarouselMobile, Works },
  data() {
    return {
      cards: [
        {
          imgName: "testimonial-man.png",
          testimonialName: "John Doe",
          testimonialMessage: "It is a really a nice thing to work with professionals",
        },
        {
          imgName: "testimonial-man.png",
          testimonialName: "Jane Doe",
          testimonialMessage: "It is a really a nice thing to work with professionals",
        },
        {
          imgName: "testimonial-man.png",
          testimonialName: "Pete Doe",
          testimonialMessage: "It is a really a nice thing to work with professionals",
        }
      ],
      worksArray: [
        {
          bgColor: "bg-brand-blue-8",
          title: "Collect Africa",
          subtitle: "Fintech Solution",
          imgPosition: "",
          img: require("../assets/collect-africa-home.png"),
          alt: "Collect"
        },
        {
          bgColor: "bg-brand-orange-1",
          title: "Trigle",
          subtitle: "Food delivery, Commerce",
          imgPosition: "lg:absolute lg:h-128 lg:-bottom-28 lg:-right-20",
          img: require("../assets/trigle-home.png"),
          alt: "Trigle"
        },
        {
          bgColor: "bg-brand-green-1",
          title: "Doorstep",
          subtitle: "Logistics",
          imgPosition: "",
          img: require("../assets/doorstep-home.png"),
          alt: "Doorstep"
        },
        {
          bgColor: "bg-brand-red-5",
          title: "Trustbreed",
          subtitle: "Customer Service, B2C",
          imgPosition: "lg:w-2/3 lg:absolute lg:-bottom-28 lg:-right-24",
          img: require("../assets/trustbreed-home.png"),
          alt: "Trustbreed"
        },
        {
          bgColor: "bg-brand-blue-8",
          title: "Powr Finance",
          subtitle: "Logistics",
          imgPosition: "",
          img: require("../assets/powrfinance-home.png"),
          alt: "Powr Finance"
        },
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    }
  },
  methods: {
    changeTheme() {
      this.$store.commit('changeTheme');
    }
  },
}
</script>

<style scoped>
div {
  font-family: "Euclid Circular A", sans-serif;
}
.testimonials-header {
  color: #000;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0e0f14;
}
.testimonials-header-dark {
  color: #fff;
  -webkit-text-fill-color: #0e0f14;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
}
</style>