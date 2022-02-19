<template>
    <div class="p-10 bg-brand-gray-light-1 dark:bg-brand-black-5 shadow-sm rounded-md">
        <div class="mb-8">
            <img
                class="p-4 rounded-2xl"
                :class="project.bgColor"
                :src="project.icon"
                alt="Discover"
            />
        </div>
        <h3 class="mb-3 text-xl md:text-2xl lg:text-3xl font-bold font-playfair">{{ project.title }}</h3>
        <p class="mb-6">{{ project.text }}</p>
        <div
            v-for="(item, index) in project.items"
            :key="index"
            class="flex space-x-4 items-center mb-4"
        >
            <div>
                <img
                    class="p-3 rounded-full"
                    :class="project.bgColor"
                    :src="project.tick"
                    alt="tick"
                />
            </div>
            <p>{{ item }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectResponsibilities',
    props: {
        project: {
            type: Object,
        }
    },
}
</script>