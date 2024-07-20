<template>
  <!-- <div>
    <button @click="fetchData">Fetch Data</button>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }} - {{ item.age }}</li>
    </ul>
  </div> -->
  <div class="m-10 mt-4">
    <NavBar />
  </div>
  <RouterView />
  <Footer />
</template>

<script setup>
import NavBar from '@/components/NavBarCP.vue';
import Footer from "@/components/FooterCP.vue";


import { ref } from 'vue';
import api from './services/api.js';

const data = ref([]);

const fetchData = async () => {
  try {
    const response = await api.getData();
    data.value = response.data.data;
  } catch (error) {
    console.error("There was an error fetching data:", error);
  }
};

import { onMounted } from 'vue';

onMounted(() => {
  fetchData();
});
</script>