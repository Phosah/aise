<template>
  <div class="max-w-5xl mx-auto">
        <HeaderDark />
        <section class="flex items-center justify-between bg-brand-orange-1">
            <div>
                <h3 class="mb-4">Trigle</h3>
                <p class="mb-8">Food delivery, Commerce</p>
                <p class="border-b">Case Study</p>
            </div>
            <div>
                <img src="../assets/trigle-home.png" alt="Trigle home photo">
            </div>
        </section>
        <section class="py-20">
            <h2>Trigle App Design</h2>
            <p>Bringing simplicity and flexibility to having your meals</p>
            <div>
                Trigle is a restaurant finding app with a framework developed for both tourists, and residents to find restaurants closest to them depending on the location
            </div>
            <p>It gets to solve this by its provision of an Augmented reality (AR) system which when given access to your camera, displays a live view of your current location with accurate steps and paths that leads you to that meal you have been salivating over. </p>
        </section>
        <section class="flex items-center justify-between py-20">
            <div>
                <h3>The problem</h3>
                <p class="mb-4">We live in times where so much is happening online, which keeps us locked in the world of our mobile phones becoming where everyone wants (needs) to be able to access their daily needs. This has greatly reduced the exploration that occurs from the regular strolling to see new places hence directions even in our environment are a bit unknown, so we are caught up with little knowledge of restaurants for good meals and hangouts.</p>
                <p>Also due to the busy routine of work, there is little time to prepare your meals most times and we all need to have our healthy meal either for sustenance or for leisure with friends or having that special dinner with a loved one. But due to the lack of exploration the knowledge of good restaurants to go to or order a meal from becomes difficult.</p>
            </div>
            <div>
                <img src="../assets/trigle-problem-1.png" alt="Guys and lady smiling and operating their mobiles.">
                <img src="../assets/trigle-problem-1.png" alt="Guys and lady smiling and operating their mobiles.">
            </div>
        </section>
        <section class="flex items-center justify-between py-20">
            <div>
                <img src="../assets/trigle-why-1.png" alt="Ladies on tourism">
                <img src="../assets/trigle-why-2.png" alt="Ladies eating pizza at a restaurant">
            </div>
            <div>
                <h3 class="mb-4">Why Trigle?</h3>
                <p class="mb-4">With so much need and desire for good meals and the lock of time for its preparation, there has been an increase in food ordering and delivery demand</p>
                <p>As good as the innovation was it still held some pain points and some of which include</p>
                <ul>
                    <ol>Knowledge of a handful of restaurants websites or apps to order meals from</ol>
                    <ol>Humans always want to try out new things and being restricted to restaurants you know restricts that</ol>
                    <ol>There is also a high need for a change of environment to clear the head or have a nice time with friends or loved ones which requires you to go physically to the restaurants</ol>
                </ul>
                <p>With Trigle having its logistics services small restaurants have nothing to worry about not being able to deliver meals fast as that was their major concern</p>
                <p>It also gives you real-life AR directions to the restaurants for those who want to eat in this eradicates the stress of asking your way around or trying to figure out the complex maps</p>
            </div>
        </section>
  </div>
</template>

<script>
import HeaderDark from '../components/HeaderDark'
export default {
    name: 'Trigle',
    components: { HeaderDark }
}
</script>