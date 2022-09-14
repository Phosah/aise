<template>
    <section class="max-w-7xl mx-auto py-20 md:px-16">
        <h1
            class="mb-16 text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair text-center"
        >Other Projects</h1>
        <div>
            <div class="md:flex md:items-center md:space-x-8 space-y-6">
                <router-link class="flex-1 mb-8 block" to="/">
                    <div>
                        <img class="w-full" :src="shuffledProjects[0]" alt="Bitpowr" />
                    </div>
                </router-link>
                <router-link class="flex-1 block" to="/doorstep">
                    <div>
                        <img class="w-full" :src="shuffledProjects[1]" alt="Doorstep" />
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                require("../assets/bitpowr.png"),
                require("../assets/doorstep.png"),
            ],
        }
    },
    computed: {
        shuffledProjects() {
            return this.shuffle(this.projects);
        }
    },
    methods: {
        shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;
        }
    }
}
</script>