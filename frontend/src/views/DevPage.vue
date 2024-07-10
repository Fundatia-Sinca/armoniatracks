<script setup>
import Form from "@/components/Form.vue" 
import Navbar from "@/components/Navbar.vue" </script>
<template>
    <div class="flex flex-col gap-y-5 p-5">
        <span class="text-4xl text-black">Development</span>
        <RouterLink :to="{ name: 'homepage' }" class="text-md text-red-500 shadow-xl uppercase" aria-current="page">Back
            to Homepage</RouterLink>
    </div>


    <span class="p-5">Aici lucrati.</span>
    <Navbar/>
    <Form/>

</template>
<style scoped></style>