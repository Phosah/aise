<template>
    <div class="h-96 mb-6">
        <img class="h-full mr-auto" :src="require(`@/assets/${imgName}`)" alt="Survey photo" />
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