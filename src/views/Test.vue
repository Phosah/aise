<template>
  <div class="max-w-6xl mx-auto">
      <NavbarDark />
        <section class="flex items-center justify-between w-10/12 mx-auto bg-brand-green-1 text-white">
            <div class="flex-1">
                <div class="w-2/3 mx-auto">
                    <h2 class="mb-4 text-xl font-semibold">Doorstep</h2>
                    <p class="mb-8 font-light">Logistics</p>
                    <p class="inline-block font-semibold border-b">Case Study</p>
                </div>
            </div>
            <div class="flex-1">
                <img src="../assets/doorstep-home.png" alt="Doorstep home photo">
            </div>
        </section>
        <section class="max-w-xl mx-auto py-20 text-brand-black-4">
            <h1 class="mb-8 text-5xl font-semibold text-brand-black-1">Doorstep Logistics</h1>
            <p class="mb-16">The fastest way to ship your packages and parcels around the world</p>
            <div class="mb-16 px-12 border-l-4 border-brand-black-4 text-2xl font-bold">
                Doorstep is a solution that helps to simplify logistics and shipping services to ensure quick delivery of packages in a simplified processes
            </div>
            <p>Sending of documents and parcels have been in high demand as a result of expanding businesses and inter country trading. It gets to solve this by its provision of an integration sync with the tracking ID of the platform to constantly keep you in the loop.</p>
        </section>
        <section class="flex items-center justify-between space-x-12 w-10/12 mx-auto py-20">
            <div class="flex-1">
                <h2 class="mb-8 text-xl font-bold">Project responsibilities</h2>
                <p class="mb-8">During the course of this project i was incharge of the ux and ui process which occasionally involved stakeholder interviews and surveys</p>
            </div>
            <div class="flex-1">
                <img src="../assets/project-photo.png" alt="Project">
            </div>
        </section>
        <section class="w-10/12 mx-auto py-20">
            <div class="grid md:grid-cols-2 gap-10">
                <template v-for="(project, index) in projects" :key="index">
                    <ProjectResponsibilities :iconUrl="project.iconUrl" :title="project.title" 
                    :text="project.text"
                    />
                </template>
            </div>
        </section>

    </div>
</template>

<script>
import NavbarDark from '../components/NavbarDark'
// import ProjectResponsibilities from '../components/ProjectResponsibilities'
export default {
    name: "Doorstep",
    components: {NavbarDark},
    data() {
        return {
            projects: [
                {
                    iconUrl: require("../assets/discover-icon.png"),
                    title: "Discover",
                    text: "Discovery was the first phase in the UX-design process that involved",
                },
                {
                    iconUrl: require("../assets/define-icon.png"),
                    title: "Define",
                    text: "Defining a product is a phase in the UX-design process that involves",
                },
                {
                    iconUrl: require("../assets/ideate-icon.png"),
                    title: "Ideate",
                    text: "This part of the design process was where the product structure to shape",
                },
                {
                    iconUrl: require("../assets/visual-icon.png"),
                    title: "Visual Design",
                    text: "The research and structuring was brought to life visually to solve the problem",
                }
            ]
        }
    }
}
</script>

<style>

</style>