<template>
    <div>
        <ul class="flex flex-1 space-x-4">
            <li
                v-for="(_, index) in elements"
                :key="index"
                class="border-brand-black-2 border-b-4 w-1/4"
                :class="{'line-selected': currentElementIndex === index}"
            >
                <button
                    class="bg-red-200"
                    @click="showElement(index)"
                    :disabled="currentElementIndex === index"
                />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Indicator",
    props: { elements: Array, currentElementIndex: Number, showElement: Function }
}
</script>

<style>
.line-selected {
  opacity: 0.7;
  cursor: default;
}
</style>