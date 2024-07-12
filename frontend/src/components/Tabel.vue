<template>
    <div class="bg-yellow-200 min-h-screen">
      <header class="flex justify-between items-center bg-yellow-300 p-4">
        <div class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
          <h1 class="text-2xl font-bold">Școala de Muzică Armonia</h1>
        </div>
        
        <nav>
          <ul class="flex space-x-4">
            <li>
              <RouterLink :to="{ name: 'homepage' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Home Page</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'devpage' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Schedule</RouterLink>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tabel</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center space-x-2">
  <div class="p-2 bg-yellow-200 rounded-lg hover:bg-blue-700">
    <button class="text-2xl text-black hover:text-white" @click="notify">🔔</button>
  </div>
  <div class="p-2 bg-yellow-200 rounded-lg hover:bg-blue-700">
    <button class="text-2xl text-black hover:text-white" @click="signIn">👤</button>
  </div>
</div>
      </header>
      
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
   /* methods: {
      exportPDF() 
        const doc = new jsPDF();
        doc.text("Școala de Muzică Armonia", 10, 10);
        doc.autoTable({ html: this.$refs.table });
        doc.save('table.pdf');
    }*/
  }
   </script>
  
  <style>
  body {
    margin: 0;
  }
  </style> 
  