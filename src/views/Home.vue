<template>
    <div class="max-w-6xl mx-auto p-4 bg-brand-black-1 text-white">
        <Header />
        <section class="flex items-center justify-between space-x-4 py-20">
            <div class="w-96 bg-red-300 p-3">
                <h3 class="mb-4 text-4xl">A little dive into Aise</h3>
                <h4 class="mb-4">I am an Experience designer who is passionate about solving problems and design solutions that has great impact on people's lives</h4>
                <div class="flex space-x-4">
                    <button class="p-3 bg-white text-brand-black-1">Book an appointment</button>
                    <button class="p-3 bg-brand-black-1 text-white">Resume</button>
                </div>
            </div>
            <div><img src="../assets/aise.png" alt=""></div>
        </section>
        <section class="max-w-3xl mx-auto py-20 bg-white text-brand-black-1">
            <h3 class="mb-4">Who am I?</h3>
            <p class="mb-4">I'm Aise Idahor Product Design Lead at Bento Africa and Design consultant at daba where I'm helping to empower businesses and change lives Research and data-driven insights. I help companies build teams and digital products. In my experience, I've come to find that while researching user's needs and pain points, collaborating with partners & stakeholders intimately throughout the design process creates the best product. While being fascinated with all aspects of User Experience design, I specialize in ideation, storytelling, and experience design where I aim to create memorable experiences</p>
            <div class="flex items-center space-x-4 mb-4">
                <div class="border-left border-2"></div>
                <p>“Design is really an act of communication, which means having a deep understanding of the person with whom the designer is communicating ”</p>
            </div>
            <p>When I'm not designing, you can find me playing PC games, watching a movie (series preferably), I am always on my headset listening to good music. Through my design journey, I’ve found myself learning a bit of motion design, 3D design, front-end, and communication skills.</p>
        </section>
        <section class="py-20">
            <h2 class="mb-4">MY DESIGN GUIDELINES</h2>
            <div class="grid grid-cols-3 gap-4">
                <div v-for="(guideline, index) in guidelines" :key="index">
                    <DesignGuidelines :imageUrl="guideline.imageUrl" :title="guideline.title" :text="guideline.text" :altText="guideline.altText"/>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center py-20">
            <div class="mb-8"><img src="../assets/project-talk.png" alt="Project talk"></div>
            <h3 class="mb-4">Let's talk about your project</h3>
            <p class="mb-4">It takes any designer to design a product, but it takes creative <span>identification of users needs, and business goals to design the future</span></p>
            <button class="p-3 text-brand-black-1 bg-white">Book an appointment</button>
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header'
import DesignGuidelines from '../components/DesignGuidelines'
import Footer from '../components/Footer'
export default {
    name: 'Home',
    components: { Header, DesignGuidelines, Footer },
    data() {
        return {
            guidelines: [
                {
                    imageUrl: require("../assets/empower.png"),
                    altText: "Empower icon",
                    title: "Empowering",
                    text: "Empowering design ensures products center on the value they provide to people over the revenue it can generate."
                },
                {
                    imageUrl: require("../assets/respectful.png"),
                    altText: "Respect icon",
                    title: "Respectful",
                    text: "Respectful design prioritizes people’s time, attention and overall digital well-being."
                },
                {
                    imageUrl: require("../assets/business-goals.png"),
                    altText: "Business icon",
                    title: "Business Goals",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur congue tempor, "
                },
                {
                    // imageUrl: require("../assets/empathy.png"),
                    altText: "Empathy icon",
                    title: "Empathy",
                    text: "Finite design maximizes the overall quality of time spent by bounding the experience and prioritizing meaningful and relevant content."
                },
                {
                    // imageUrl: require("../assets/inclusivity.png"),
                    altText: "inclusivity icon",
                    title: "inclusivity",
                    text: "Inclusive design is a methodology that enables and draws on the full range of human diversity."
                },
                {
                    // imageUrl: require("../assets/transparent.png"),
                    altText: "Transparent icon",
                    title: "Transparent",
                    text: "Transparent design is clear about intentions, honest in actions and free of dark patterns."
                },
            ]       
        }
    }
}
</script>