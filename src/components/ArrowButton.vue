<template>
    <div>
        <button class="rounded-full p-2 bg-red-100">
            <img 
                class="transparent opacity-75 h-6"
                :src="require(`../assets/${arrowType}.svg`)" 
                :alt="arrowType + ' arrow'"
            >
        </button>
    </div>
</template>

<script>
export default {
    name: "ArrowButton",
    props: {arrowType: String}
}
</script>