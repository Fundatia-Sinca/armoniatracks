<script setup>
</script>
<template>
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
          <RouterLink :to="{ name: 'tablepage' }"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tabel</RouterLink>
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
</template>
<style scoped></style>
