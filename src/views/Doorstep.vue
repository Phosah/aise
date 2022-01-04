<template>
    <div class="max-w-6xl mx-auto">
        <NavbarDark />
        <section class="flex items-center justify-between w-10/12 mx-auto bg-hero-image bg-no-repeat bg-cover bg-brand-green-1 text-white">
            <div class="flex-1">
                <div class="w-2/3 mx-auto">
                    <h2 class="mb-4 text-xl font-semibold">Osasuyi</h2>
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
                    <ProjectResponsibilities 
                    :iconUrl="project.iconUrl" 
                    :title="project.title" 
                    :text="project.text"
                    :items="project.items"
                    :tickUrl="project.tickUrl"
                    :class="project.bgColor"
                    />
                </template>
            </div>
        </section>
        <section class="w-10/12 mx-auto py-20">
            <div class="grid md:grid-cols-2 gap-10">
                <div class="mb-10 px-6 py-6 bg-brand-gray-light-1 shadow-sm rounded-md">
                    <div class="mb-8"><img class="p-4 bg-brand-purple-1 rounded-md" src="../assets/discover-icon.png" alt="Discover"></div>
                    <h4 class="mb-6 text-2xl font-semibold">Discover</h4>
                    <p class="mb-6">Discovery was the first phase in the UX-design process that involved</p>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-purple-1 rounded-full" src="../assets/tick-purple.png" alt="tick"></div>
                        <p>Design strategy</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-purple-1 rounded-full" src="../assets/tick-purple.png" alt="tick"></div>
                        <p>Stakeholder interview</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-purple-1 rounded-full" src="../assets/tick-purple.png" alt="tick"></div>
                        <p>Market strategy</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-purple-1 rounded-full" src="../assets/tick-purple.png" alt="tick"></div>
                        <p>Competitor analysis</p>
                    </div>
                </div>
                <div class="mb-10 px-6 py-6 bg-brand-gray-light-1 shadow-sm rounded-md">
                    <div class="mb-8"><img class="p-4 bg-brand-blue-2 rounded-md" src="../assets/define-icon.png" alt="Discover"></div>
                    <h4 class="mb-6 text-2xl font-semibold">Define</h4>
                    <p class="mb-6">Defining a product is a phase in the UX-design process that involves</p>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-blue-2 rounded-full" src="../assets/tick-blue.png" alt="tick"></div>
                        <p>User Research</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-blue-2 rounded-full" src="../assets/tick-blue.png" alt="tick"></div>
                        <p>User personas</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-blue-2 rounded-full" src="../assets/tick-blue.png" alt="tick"></div>
                        <p>Data Gathering</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-blue-2 rounded-full" src="../assets/tick-blue.png" alt="tick"></div>
                        <p>Empathy mapping</p>
                    </div>
                </div>
                <div class="mb-10 px-6 py-6 bg-brand-gray-light-1 shadow-sm rounded-md">
                    <div class="mb-8"><img class="p-4 bg-brand-orange-2 rounded-md" src="../assets/ideate-icon.png" alt="Ideate"></div>
                    <h4 class="mb-6 text-2xl font-semibold">Ideate</h4>
                    <p class="mb-6">This part of the design process was where the product structure to shape</p>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-orange-2 rounded-full" src="../assets/tick-yellow.png" alt="tick"></div>
                        <p>Brainstorming</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-orange-2 rounded-full" src="../assets/tick-yellow.png" alt="tick"></div>
                        <p>User flow</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-orange-2 rounded-full" src="../assets/tick-yellow.png" alt="tick"></div>
                        <p>Information architecture</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-orange-2 rounded-full" src="../assets/tick-yellow.png" alt="tick"></div>
                        <p>Card sorting</p>
                    </div>
                </div>
                <div class="mb-10 px-6 py-6 bg-brand-gray-light-1 shadow-sm rounded-md">
                    <div class="mb-8"><img class="p-4 bg-brand-red-1 rounded-md" src="../assets/visual-icon.png" alt="Visual"></div>
                    <h4 class="mb-6 text-2xl font-semibold">Visual Design</h4>
                    <p class="mb-6">The research and structuring was brought to life visually to solve the problem</p>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-red-1 rounded-full" src="../assets/tick-red.png" alt="tick"></div>
                        <p>Wireframe</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-red-1 rounded-full" src="../assets/tick-red.png" alt="tick"></div>
                        <p>Style guide generation</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-red-1 rounded-full" src="../assets/tick-red.png" alt="tick"></div>
                        <p>High fidelity design</p>
                    </div>
                    <div class="flex space-x-4 items-center mb-4">
                        <div><img class="p-3 bg-brand-red-1 rounded-full" src="../assets/tick-red.png" alt="tick"></div>
                        <p>Prototype</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex items-center justify-between space-x-12 w-10/12 mx-auto py-20">
            <div class="flex-1">
                <h2 class="mb-8 text-xl font-bold">The problem</h2>
                <p class="mb-8">The difficulty of knowing how to send a package and knowing the dimensions and and weights of packages and parcels which are usually a major criteria in creating a shipping request. Also a major problem was tracking each major milestone in the packages journey</p>
            </div>
            <div class="flex-1">
                <img src="../assets/problem-photo.png" alt="Project">
            </div>
        </section>
        <section class="w-10/12 mx-auto py-20">
            <div class="mb-8">
                <h2 class="mb-4 text-2xl font-bold">Project Timeline</h2>
                <p class="mb-8">Although I was the sole designer of this project I didn't work alone, it was a strong team effort that included the project manager, content manager, Stakeholders, and three skilled developers. We communicated and brainstormed throughout the entire process</p>
                <p>Project timeline: <span class="font-bold">4 weeks</span></p>
            </div>
            <div class="flex space-x-4">
                <div class="p-2 rounded-md bg-red-500">Week 1: Interviews</div>
                <div class="p-2 rounded-md bg-red-500">Week 2: Research</div>
                <div class="p-2 rounded-md bg-red-500">Week 3: Brainstorming & IA</div>
                <div class="p-2 rounded-md bg-red-500">Week 4: Visual design</div>
            </div>
        </section>
        <section class="flex items-center justify-between space-x-12 w-10/12 mx-auto py-20">
            <div>
                <img src="../assets/person-1.png" alt="Person">
                <img src="../assets/person-2.png" alt="Person">
                <img src="../assets/person-3.png" alt="Person">
                <img src="../assets/person-4.png" alt="Person">
                <img src="../assets/person-5.png" alt="Person">
                <img src="../assets/person-6.png" alt="Person">
            </div>
            <div>
                <h3 class="mb-4 text-xl font-bold">User Interviews</h3>
                <p class="mb-8">Interviews & surveys are aimed at getting an indepth approach of how our targeted users would engage the product, determine their pain points, challenges, what they would love to have on the platform and structure all to get  the best solution for their problems.</p>
                <p>I gathered the data from the interviews and structured out their pains and needs to have a structure for an empathy mapping</p>
            </div>
        </section>
        <section class="flex items-center justify-between space-x-12 w-10/12 mx-auto py-20">
            <div class="flex-1">
                <h2 class="mb-8 text-xl font-bold">Quantitative research result</h2>
                <p class="mb-8">From the findings of our survey and interviews carried out along with an online research of users complaints from users of competitors products, the largest pain was the identifying of the dimensions of the package to be sent which is usually a requirement to detemine shipment cost</p>
            </div>
            <div class="flex-1">
                <img src="../assets/research-photo.png" alt="Quantitative research">
            </div>
        </section>
        <section class="w-10/12 mx-auto py-20 text-white bg-brand-black-4">
            <h2 class="mb-4 text-2xl font-bold text-white text-center">Personas</h2>
            <div class="flex space-x-10 justify-center">
                <div class="flex space-x-6">
                    <div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div><img src="../assets/personas-1.png" alt="Man"></div>
                            <div>
                                <h4>Jonathan Ini</h4>
                                <p>Accountant</p>
                            </div>
                        </div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">Rarely use logistics services</div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">
                            <h4>About Jonathan</h4>
                            <p>Jonathan is an Accountant with over 3 years working experience, he is a graduate of the Convenant university Ota. <br>
                            He is a calm, inquisitive, career driven and a lover of family</p>
                        </div>
                    </div>
                    <div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">
                            <h4>Demographics</h4>
                            <p>27 years old</p>
                            <p>Lives in Lagos, Nigeria</p>
                            <p>Single</p>
                        </div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">
                            <h4>Goals and needs</h4>
                            <p>A means to be able to send packages to his siblings abroad and be aware of everything going on along the delivery</p>
                        </div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">
                            <h4>Pain points</h4>
                            <p>Its really difficult to know the exact or approximate dimensions of your shipments due to the fact i dont know alot about dimensioning</p>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-6">
                    <div>
                        <div class="flex space-x-4 items-center mb-4">
                            <div><img src="../assets/personas-1.png" alt="Man"></div>
                            <div>
                                <h4>Jonathan Ini</h4>
                                <p>Accountant</p>
                            </div>
                        </div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">Rarely use logistics services</div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">
                            <h4>About Jonathan</h4>
                            <p>Jonathan is an Accountant with over 3 years working experience, he is a graduate of the Convenant university Ota. <br>
                            He is a calm, inquisitive, career driven and a lover of family</p>
                        </div>
                    </div>
                    <div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">
                            <h4>Demographics</h4>
                            <p>27 years old</p>
                            <p>Lives in Lagos, Nigeria</p>
                            <p>Single</p>
                        </div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">
                            <h4>Goals and needs</h4>
                            <p>A means to be able to send packages to his siblings abroad and be aware of everything going on along the delivery</p>
                        </div>
                        <div class="w-52 mb-4 p-4 rounded-md bg-brand-black-5">
                            <h4>Pain points</h4>
                            <p>Its really difficult to know the exact or approximate dimensions of your shipments due to the fact i dont know alot about dimensioning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex items-center space-x-8 w-10/12 mx-auto py-20">
            <div class="flex-1">
                <div class="flex space-x-2">
                    <div><img src="../assets/fedex.png" alt="FedEx"></div>
                    <div><img src="../assets/dhl.png" alt="DHL"></div>
                    <div><img src="../assets/ups.png" alt="UPS"></div>
                </div>
                <div class="flex space-x-2">
                    <div><img src="../assets/xpologistics.png" alt="XPOLogistics"></div>
                    <div><img src="../assets/expeditors.png" alt="Expeditors"></div>
                    <div><img src="../assets/gig.png" alt="Gig"></div>
                </div>
            </div>
            <div class="flex-1">
                <h3 class="mb-4 text-xl font-bold">Competitor analysis</h3>
                <p>In order to understand the market, i conducted a SWOT analysis on the clients top competitors. Here i investigated the in’s and out’s of the companies, their strengths and weakness, opportunities and potential threats</p>
            </div>
        </section>
        <section class="py-20">
            <h2 class="mb-4 text-2xl font-bold">Design strategy</h2>
            <p>My design strategy comprised of integrated planning processes that examined the relationships between how the design and business may complement one another, in simple terms finding a balance between business objectives and creative solutions</p>
            <div class="flex justify-center"><img src="../assets/strategy.png" alt="Design strategy"></div>
            <div class="flex space-x-6">
                <div class="flex-1">
                    <div class="flex items-center">
                        <div class="w-16 h-16 mb-4 rounded-full bg-brand-green-1 "></div>
                        <h4>Business goal</h4>
                    </div>
                    <div class="flex space-x-2 mb-4">
                        <div><img class="p-2 rounded-full bg-brand-green-1" src="../assets/tick-white.png" alt="Tick"></div>
                        <p>To enable smooth integrations with 3rd party companies to ease delivery, minimize cost</p>
                    </div>
                    <div class="flex space-x-2">
                        <div><img class="p-2 rounded-full bg-brand-green-1" src="../assets/tick-white.png" alt="Tick"></div>
                        <p>Increase users retention</p>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex items-center">
                        <div class="w-16 h-16 mb-4 rounded-full bg-brand-green-1 "></div>
                        <h4>Target users</h4>
                    </div>
                    <div class="flex space-x-2 mb-4">
                        <div><img class="p-2 rounded-full bg-brand-green-1" src="../assets/tick-white.png" alt="Tick"></div>
                        <p>Businesses with foreign customers</p>
                    </div>
                    <div class="flex space-x-2">
                        <div><img class="p-2 rounded-full bg-brand-green-1" src="../assets/tick-white.png" alt="Tick"></div>
                        <p>People with family and friends abroad</p>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex items-center">
                        <div class="w-16 h-16 mb-4 rounded-full bg-brand-green-1 "></div>
                        <h4>Platforms</h4>
                    </div>
                    <div class="flex space-x-2 mb-4">
                        <div><img class="p-2 rounded-full bg-brand-green-1" src="../assets/tick-white.png" alt="Tick"></div>
                        <p>Web Application</p>
                    </div>
                    <div class="flex space-x-2">
                        <div><img class="p-2 rounded-full bg-brand-green-1" src="../assets/tick-white.png" alt="Tick"></div>
                        <p>Mobile App - IOS & Android</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-10/12 mx-auto py-20">
            <h2>The Solution</h2>
            <p>Below shows a few of the screens that portrayed the soltions to the stated problem in the most user friendly manner</p>
            <div class="flex items-center justify-between space-x-12 py-20">
                <div class="flex-1">
                    <h2 class="mb-8 text-xl font-bold">Main dashboard</h2>
                    <p class="mb-8">This shows the dashboard of the users showing all their shipments analysis and various activities in a simplified manner that presents the informations to you at a glance</p>
                </div>
                <div class="flex-1">
                    <img src="../assets/solution-1.png" alt="Solution">
                </div>
            </div>
            <div class="flex items-center justify-between space-x-12 py-20">
                <div class="flex-1">
                    <img src="../assets/solution-2.png" alt="Solution">
                </div>
                <div class="flex-1">
                    <h2 class="mb-8 text-xl font-bold">Tracking page</h2>
                    <p class="mb-8">This page is where shipmensts are searched for and tracked in a simplified manner displaying to you the status of your shipment and the expected delivery date shown first as the most important things, then if you want to get more info, a table with the various listings of every location or update is shown</p>
                </div>
            </div>
            <div class="flex items-center justify-between space-x-12 py-20">
                <div class="flex-1">
                    <h2 class="mb-8 text-xl font-bold">Create shipments</h2>
                    <p class="mb-8">Based on the users research on their pain points, the shipment creation process starts from a page to upload your shipment and from your upload, it is scanned and the dimensions is estimated for you with little artificial intelligence, that solves the problem of getting stuck on dimensions</p>
                </div>
                <div class="flex-1">
                    <img src="../assets/solution-3.png" alt="Solution">
                </div>
            </div>
        </section>
        <section class="w-10/12 mx-auto py-20">
            <h2>Conclusion</h2>
            <p>The experience of this project was an insightful one, the aim to simplify the process even further is in progress and results from feedback of V1 would be used to make the users experience better and solve the problems better for the users</p>
            <div><img src="../assets/conclusion.png" alt="Conclusion"></div>
        </section>
        <section class="w-10/12 mx-auto py-20">
            <h2>Other Projects</h2>
            <div class="flex space-x-3">
                <img src="../assets/bitpowr.png" alt="Bitpowr">
                <img src="../assets/doorstep.png" alt="Doorstep">
            </div>
        </section>
        <section class="py-20">
            <div class="flex flex-col items-center w-10/12 mx-auto ">
                <div class="mb-24"><img src="../assets/project-talk-dark.png" alt="Project talk"></div>
                <h2 class="mb-8 text-4xl md:text-5xl font-semibold">Let's talk about your project</h2>
                <p class="mb-16 text-xl font-light md:text-center">It takes any designer to design a product, but it takes creative <span class="font-bold">identification of users needs, and business goals to design the future</span></p>
                <button class="px-8 py-5 bg-brand-black-1 text-white font-bold bg-white rounded-sm">Book an appointment</button>
            </div>
        </section>
        <div class="">
            <FooterDark />
        </div>
    </div>
</template>

<script>
import NavbarDark from '../components/NavbarDark'
import ProjectResponsibilities from '../components/ProjectResponsibilities'
import FooterDark from '../components/FooterDark'
export default {
    name: "Doorstep",
    components: {NavbarDark, ProjectResponsibilities, FooterDark},
    data() {
        return {
            projects: [
                {
                    iconUrl: require("../assets/discover-icon.png"),
                    title: "Discover",
                    text: "Discovery was the first phase in the UX-design process that involved",
                    bgColor: "bg-brand-purple-1",
                    tickUrl: require("../assets/tick-purple.png"),
                    items: [
                        "Design strategy",
                        "Stakeholder interview",
                        "Market strategy",
                        "Competitor analysis"
                    ]
                },
                {
                    iconUrl: require("../assets/define-icon.png"),
                    title: "Define",
                    text: "Defining a product is a phase in the UX-design process that involves",
                    bgColor: "bg-brand-blue-2",
                    tickUrl: require("../assets/tick-blue.png"),
                    items: [
                        "User Research",
                        "User personas",
                        "Data Gathering",
                        "Empathy mapping"
                    ]
                },
                {
                    iconUrl: require("../assets/ideate-icon.png"),
                    title: "Ideate",
                    text: "This part of the design process was where the product structure to shape",
                    bgColor: "bg-brand-orange-2",
                    tickUrl: require("../assets/tick-yellow.png"),
                    items: [
                        "Brainstorming",
                        "User flow",
                        "Information architecture",
                        "Card sorting"
                    ]
                },
                {
                    iconUrl: require("../assets/visual-icon.png"),
                    title: "Visual Design",
                    text: "The research and structuring was brought to life visually to solve the problem",
                    bgColor: "bg-brand-red-1",
                    tickUrl: require("../assets/tick-red.png"),
                    items: [
                        "Wireframe",
                        "Style guide generation",
                        "High fidelity design",
                        "Prototype"
                    ]
                }
            ]
        }
    }
}
</script>

<style>

</style>