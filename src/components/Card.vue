<template>
    <div>
        <div class="block">
            <div class="mb-6 py-20 bg-brand-black-2"><img class="mx-auto" :src="require(`@/assets/${imgName}`)"  alt="Survey photo"></div>
        </div>
        <!-- Mobile version -->
        <!-- <div class="block md:hidden">
            <div class="mb-6 py-20 bg-brand-black-2"><img class="mx-auto" src="../assets/survey-photo-mobile.png" alt="Survey photo"></div>
            <div class="flex space-x-4">
                <div class="border-brand-black-2 border-b-4 w-1/4"></div>
                <div class="border-brand-black-2 border-b-4 w-1/4"></div>
                <div class="border-brand-black-2 border-b-4 w-1/4"></div>
                <div class="border-brand-black-2 border-b-4 w-1/4"></div>
            </div>                 
        </div> -->
        <!-- End of mobile version -->
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

<style>

</style>