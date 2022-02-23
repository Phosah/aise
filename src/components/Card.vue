<template>
    <div class="mb-6">
        <img class="h-full w-full mr-auto" :src="require(`@/assets/${imgName}`)" alt="Survey photo" />
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        imgName: String
    }
}
</script>