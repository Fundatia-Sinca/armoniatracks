<script setup>
import Form from "@/components/Form.vue" 
import Tabel from "@/components/Tabel.vue" 
import Navbar from "@/components/Navbar.vue" </script>
<template>
    <div class="flex flex-col gap-y-5 p-5 mt-20 bg-yellow-200">
        <span class="text-4xl text-black">Schedule</span>
    </div>

    <Navbar/>
    <Form/>
    <Tabel/>

</template>
<style scoped></style>