<script setup></script>
<template>
  <div
    class="fixed top-0 left-0 w-full bg-white p-5 z-50 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none uppercase">
    <div class="flex items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWKd3u4Law_e1ypGdth_KYPgXOQRzjHZFKw&s" alt=""
        class="w-12 h-12" />
      <RouterLink :to="{ name: 'homepage' }" class="ml-3 text-xl font-serif uppercase">Școala de Muzica Armonica
      </RouterLink>
    </div>
    <div class="hidden lg:flex items-center gap-6">
      <nav class="flex items-center">
        <ul class="flex gap-6 md:gap-10">
          <li>
            <RouterLink :to="{ name: 'homepage' }"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'devpage' }"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Schedule</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'tablepage' }"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Table</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="hidden lg:flex items-center gap-6">
      <RouterLink :to="{ name: 'tablepage' }"
        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        Anything </RouterLink>
      <RouterLink :to="{ name: 'tablepage' }"
        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        Contact</RouterLink>
      <div class="p-2 bg-yellow-200 rounded-lg hover:bg-blue-700 flex items-center justify-center">
        <RouterLink :to="{ name: 'homepage' }" class="text-2xl text-black hover:text-white">🔔</RouterLink> 
      </div>
      <div class="p-2 bg-yellow-200 rounded-lg hover:bg-blue-700 flex items-center justify-center">
        <div class="relative" @mouseover="showdeskNavbar" @mouseleave="hidedeskNavbar">
          <button class="text-xl sm:text-2xl">
            <i class=""></i>👤
          </button>
          <transition name="fade">
            <ul v-if="showdesknavbar"
              class="absolute left-1/2 transform -translate-x-1/2 bg-white rounded shadow-lg mt-2 w-32 h-auto text-center z-50"
              @mouseover="showdeskNavbar" @mouseleave="hidedeskNavbar">
              <li class="p-2 hover:bg-gray-100 hover:text-black text-white bg-brown-sugar">
                <RouterLink :to="{ name: 'loginpage' }" aria-current="page">Login
                </RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'signuppage' }" @click="hidedeskNavbar" class="text-black" aria-current="page">
                  Sign up</RouterLink>
                </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
