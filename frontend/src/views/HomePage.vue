<script setup>
import CardCP from "@/components/CardCP.vue"
import Navbar from "@/components/Navbar.vue" </script>

<template>
    <div class="flex flex-col gap-y-5 p-5 mt-20">
        <span class="text-4xl text-black">Homepage</span>
        <RouterLink :to="{ name: 'devpage' }" class="text-md text-red-500 shadow-xl uppercase">To
            Development</RouterLink>
    </div>
    <Navbar/>
    <CardCP title="Exemplu utilizare card" class="p-5" />

</template>
<style scoped>
.marginText {
    margin: 5rem;
}
</style>