<template>
    <div>
        <div class="flex items-center space-x-12 px-16 md:px-0">
            <div class="flex-1 flex items-center justify-end space-x-4">
                <button class="rounded p-3 bg-red-400">
                    <img 
                        :src="require(`../assets/${arrowType}.png`)" 
                        :alt="arrowType + ' arrow'"
                    >
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArrowButton",
    props: {arrowType: String}
}
</script>