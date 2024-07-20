<template>
  <div class="bg-yellow-200 min-h-screen">
    <main class="p-4">
      <button class="bg-yellow-400 text-black py-2 px-4 mb-4 hover:bg-blue-700 hover:text-white"
        @click="exportPDF">Export as PDF</button>
      <table class="min-w-full bg-white" ref="table">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b"> Name</th>
            <th class="py-2 px-4 border-b"> Student </th>
            <th class="py-2 px-4 border-b">Date</th>
            <th class="py-2 px-4 border-b">Hour</th>
            <th class="py-2 px-4 border-b">Room</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="schedule in schedules" :key="schedule.id">
            <td class="py-2 px-4 border-b">{{ schedule.teacher_name }}</td>
            <td class="py-2 px-4 border-b">{{ schedule.student_name }}</td>
            <td class="py-2 px-4 border-b">{{ schedule.day }}/{{ schedule.month }}</td>
            <td class="py-2 px-4 border-b">{{ schedule.hour }}</td>
            <td class="py-2 px-4 border-b">{{ schedule.camera }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

const schedules = ref([]);

const fetchSchedules = async () => {
  try {
    const response = await fetch('http://localhost:3001/schedule');
    const data = await response.json();
    schedules.value = data.data;
  } catch (error) {
    console.error('Error fetching schedules:', error);
  }
};

// const exportPDF = () => {
//   const doc = new jsPDF();
//   doc.text("Școala de Muzică Armonia", 10, 10);
//   doc.autoTable({ html: table.value });
//   doc.save('table.pdf');
// };

const table = ref(null);

onMounted(() => {
  fetchSchedules();
});
</script>

<style scoped>
body {
  margin: 0;
}
</style>
