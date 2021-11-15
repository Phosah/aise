<template>
    <div class="p-3 bg-brand-black-2 shadow-sm">
        <div class="mb-8"><img :src="imageUrl" :alt="altText"></div>
        <h4 class="mb-4">{{ title }}</h4>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'DesignGuidelines',
    props: {
        imageUrl: {
            type: String,
            default: ""
        },
        altText: {
            type: String,
            default: "An alt text"
        },
        title: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        }
    }
}
</script>