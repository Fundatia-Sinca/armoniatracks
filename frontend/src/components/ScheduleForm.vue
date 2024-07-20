<script setup>
import { ref } from "vue";

const teacherName = ref("");
const studentName = ref("");
const day = ref(1);
const month = ref(1);
const hour = ref("00:00");
const camera = ref("Camera 1");

import axios from "axios";

const submitForm = async () => {
  const data = {
    teacher_name: teacherName.value,
    student_name: studentName.value,
    day: day.value,
    month: month.value,
    hour: hour.value,
    camera: camera.value,
  };

  try {
    const response = await axios.post(
      "http://localhost:3001/schedule/add-schedule",
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data.message;

    if (result === "success") {
      console.log("Schedule added successfully:", result);
    } else {
      console.error("Error adding schedule:", result);
    }

    teacherName.value = "";
    studentName.value = "";
    day.value = 1;
    month.value = 1;
    hour.value = "00:00";
    camera.value = "Camera 1";

  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
</script>

<template>
  <form class="w-full p-5 bg-yellow-200" @submit.prevent="submitForm">
    <div class="w-2/3">
      <div class="flex flex-wrap mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-teacher-name">
            Name
          </label>
          <input v-model="teacherName"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-teacher-name" type="text" placeholder="First Name, Last Name" />
        </div>
        <div class="w-full md:w-1/2 px-3">
          {{ studentName }}
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-student-name">
            Student Name
          </label>
          <input v-model="studentName"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-student-name" type="text" placeholder="First Name, Last Name" />
        </div>
      </div>

      <div class="flex items-center space-x-10">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-date-day">
            Day
          </label>
          <div class="relative">
            <select v-model="day"
              class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date-day">
              <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-date-month">
            Month
          </label>
          <div class="relative">
            <select v-model="month"
              class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date-month">
              <option v-for="m in 12" :key="m" :value="m">{{ m }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-date-hour">
            Hour
          </label>
          <div class="relative">
            <select v-model="hour"
              class="block appearance-none w-full bg-white border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date-hour">
              <option>00:00</option>
              <option>00:30</option>
              <option>01:00</option>
              <option>01:30</option>
              <option>02:00</option>
              <option>02:30</option>
              <option>03:00</option>
              <option>03:30</option>
              <option>04:00</option>
              <option>04:30</option>
              <option>05:00</option>
              <option>05:30</option>
              <option>06:00</option>
              <option>06:30</option>
              <option>07:00</option>
              <option>07:30</option>
              <option>08:00</option>
              <option>08:30</option>
              <option>09:00</option>
              <option>09:30</option>
              <option>10:00</option>
              <option>10:30</option>
              <option>11:00</option>
              <option>11:30</option>
              <option>12:00</option>
              <option>12:30</option>
              <option>13:00</option>
              <option>13:30</option>
              <option>14:00</option>
              <option>14:30</option>
              <option>15:00</option>
              <option>15:30</option>
              <option>16:00</option>
              <option>16:30</option>
              <option>17:00</option>
              <option>17:30</option>
              <option>18:00</option>
              <option>18:30</option>
              <option>19:00</option>
              <option>19:30</option>
              <option>20:00</option>
              <option>20:30</option>
              <option>21:00</option>
              <option>21:30</option>
              <option>22:00</option>
              <option>22:30</option>
              <option>23:00</option>
              <option>23:30</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full px-3 my-8 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-camera">
          Camera
        </label>
        <div class="relative">
          <select v-model="camera"
            class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-camera">
            <option>Camera 1</option>
            <option>Camera 2</option>
            <option>Camera 3</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="w-full px-3 my-8 md:mb-0">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>
