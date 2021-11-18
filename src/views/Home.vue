<template>
    <div class="max-w-6xl mx-auto">
        <header class="bg-brand-black-1 text-white">
            <Navbar />
            <section class="header flex items-center justify-between space-x-14 h-screen w-10/12 mx-auto ">
                <div class="flex-1 px-2">
                    <h1 class="text-5xl font-semibold">A little dive</h1>
                    <h1 class="mb-6 text-5xl font-semibold">into Aise</h1>
                    <p class="mb-10 text-sm text-justify">I am an Experience designer who is passionate about solving problems and design solutions that has great impact on people's lives</p>
                    <div class="flex space-x-4">
                        <button class="py-3 px-6 bg-white text-brand-black-1 font-semibold">Book an appointment</button>
                        <button class="flex-auto p-3 border border-white bg-brand-black-1 text-white font-semibold">Resume</button>
                    </div>
                </div>
                <div class="flex-1 relative h-96 border-2 border-white">
                    <img class="absolute -top-6 -left-6 w-full h-full" src="../assets/aise.png" alt="">
                </div>
            </section>
        </header>
        <section class="max-w-xl mx-auto py-20 px-3 bg-white text-brand-black-3">
            <h2 class="mb-8 text-5xl font-semibold text-brand-black-1">Who am I?</h2>
            <p class="mb-16">I'm Aise Idahor Product Design Lead at Bento Africa and Design consultant at daba where I'm helping to empower businesses and change lives Research and data-driven insights. I help companies build teams and digital products. In my experience, I've come to find that while researching user's needs and pain points, collaborating with partners & stakeholders intimately throughout the design process creates the best product. While being fascinated with all aspects of User Experience design, I specialize in ideation, storytelling, and experience design where I aim to create memorable experiences</p>
            <div class="flex items-center space-x-8">
                <p class="mb-16 pl-12 pr-16 border-l-4 border-brand-black-1 text-2xl text-brand-black-1 font-bold">“Design is really an act of communication, which means having a deep understanding of the person with whom the designer is communicating ”</p>
            </div>
            <p>When I'm not designing, you can find me playing PC games, watching a movie (series preferably), I am always on my headset listening to good music. Through my design journey, I’ve found myself learning a bit of motion design, 3D design, front-end, and communication skills.</p>
        </section>
        <section class="py-20 bg-brand-black-1 text-white">
            <div class="w-10/12 mx-auto">
                <h2 class="guideline-header mb-16 text-6xl lg:text-7xl text-transparent">MY DESIGN GUIDELINES</h2>
                <div class="grid grid-cols-3 gap-10">
                    <template v-for="(guideline, index) in guidelines" :key="index">
                        <DesignGuidelines :imageUrl="guideline.imageUrl" :title="guideline.title" :text="guideline.text" :altText="guideline.altText" :class="guideline.border"/>
                    </template>
                </div>
            </div>
        </section>
        <section class="py-20 bg-brand-black-1 text-white">
            <div class="flex flex-col items-center w-10/12 mx-auto ">
                <div class="mb-24"><img src="../assets/project-talk.png" alt="Project talk"></div>
                <h2 class="mb-8 text-5xl font-semibold">Let's talk about your project</h2>
                <p class="mb-16 text-xl font-light text-center">It takes any designer to design a product, but it takes creative <span class="font-bold">identification of users needs, and business goals to design the future</span></p>
                <button class="px-8 py-5 text-brand-black-1 font-bold bg-white rounded-sm">Book an appointment</button>
            </div>
        </section>
        <div class="bg-brand-black-1">
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
import DesignGuidelines from '../components/DesignGuidelines'
import Footer from '../components/Footer'
export default {
    name: 'Home',
    components: { Navbar, DesignGuidelines, Footer },
    data() {
        return {
            guidelines: [
                {
                    imageUrl: require("../assets/empower.png"),
                    altText: "Empower icon",
                    title: "Empowering",
                    text: "Empowering design ensures products center on the value they provide to people over the revenue it can generate.",
                    border: "border-t-0 rounded-md"
                },
                {
                    imageUrl: require("../assets/respectful.png"),
                    altText: "Respect icon",
                    title: "Respectful",
                    text: "Respectful design prioritizes people’s time, attention and overall digital well-being.",
                    border: "border-t-0 rounded-md"
                },
                {
                    imageUrl: require("../assets/business-goals.png"),
                    altText: "Business icon",
                    title: "Business Goals",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur congue tempor, ",
                    border: "border-t-0 rounded-md"
                },
                {
                    // imageUrl: require("../assets/empathy.png"),
                    altText: "Empathy icon",
                    title: "Empathy",
                    text: "Finite design maximizes the overall quality of time spent by bounding the experience and prioritizing meaningful and relevant content.",
                    border: "border-t-4 rounded-b-md"
                },
                {
                    // imageUrl: require("../assets/inclusivity.png"),
                    altText: "inclusivity icon",
                    title: "inclusivity",
                    text: "Inclusive design is a methodology that enables and draws on the full range of human diversity.",
                    border: "border-t-4 rounded-b-md"
                },
                {
                    // imageUrl: require("../assets/transparent.png"),
                    altText: "Transparent icon",
                    title: "Transparent",
                    text: "Transparent design is clear about intentions, honest in actions and free of dark patterns.",
                    border: "border-t-4 rounded-b-md"
                },
            ]       
        }
    }
}
</script>

<style scoped>
.header {
    height: calc(100vh - 96px);
}
.guideline-header {
    color: #fff;
    -webkit-text-fill-color: #0E0F14;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
}
</style>