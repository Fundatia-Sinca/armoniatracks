<template>
    <div class="bg-yellow-200 min-h-screen">
      <main class="p-4">
        
        <button class="bg-yellow-400 text-black py-2 px-4 mb-4 hover:bg-blue-700 hover:text-white" @click="exportPDF">Export as PDF</button>
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
            <tr v-for="product in products" :key="product.name">
              <td class="py-2 px-4 border-b">{{ product.name }}</td>
              <td class="py-2 px-4 border-b">{{ product.student }}</td>
              <td class="py-2 px-4 border-b">{{ product.date }}</td>
              <td class="py-2 px-4 border-b">{{ product.hour }}</td>
              <td class="py-2 px-4 border-b">{{ product.room }}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        products: [
          { name: 'Elena', student: 'Ilinca', date: ' 07.07.2024', hour: '2' , room:'1'},
          { name: 'Mihai', student: 'Tomas', date: '24.05.2024', hour: '1,5' , room:'3'}
        ],
      }
    },
    // methods: {
    //   exportPDF() 
    //     const doc = new jsPDF();
    //     doc.text("Școala de Muzică Armonia", 10, 10);
    //     doc.autoTable({ html: this.$refs.table });
    //     doc.save('table.pdf');
    // }
  }
   </script>
  
  <style>
  body {
    margin: 0;
  }
  </style> 
  