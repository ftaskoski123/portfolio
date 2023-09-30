<template>
      <div class="text-center text-black 2xl:text-left">
        <h3
          class="font-black mt-4 dark:text-white 2xl:mt-0 text-lg 2xl:text-md 2xl:ml-44 tracking-tighter"
        >
         {{ title }}
        </h3>
        <p
          class="2xl:mt-10 2xl:mx-6 font-bold leading-[1.6] text-gray-500 tracking-tight dark:text-white"
        >
         {{description}}
        </p>
        <div class="flex gap-[1rem] justify-center mt-[1rem]">
          <p
            class="border font-semibold shadow-lg py-2 px-6 tracking-tight dark:text-white"
          >
          {{ technology1 }}
          </p>
          <p
            class="border font-semibold shadow-lg py-2 px-6 tracking-tight dark:text-white"
          >
          {{ technology2 }}
          </p>
        </div>
        <projectLinks  :githublink="githublink" :livedemo="livedemo" />
      </div>
  </template>
  
  <script setup>

import projectLinks from "../components/projectLinks.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technology1: {
    type: String,
    required: true,
  },
  technology2: {
    type: String,
    required: true,
  },
  githublink: {
    type: String,
    required: true,
  },
  livedemo: {
    type: String,
    required: true,
  },
  
});
  
  </script>