<template>
  <div
    class="items-center inline-block text-black dark:hover:text-blue-500 focus:text-blue-500 hover:text-blue-500 dark:text-slate-200 2xl:relative 2xl:mt-6 2xl:ml-20 mr-44 mt-10 md:mr-52"
  >
    <!-- Github -->
    <a :href="link" target="_blank" class="flex items-center">
      <p class="mr-2 text-xl">Code</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        data-darkreader-inline-stroke=""
        style="--darkreader-inline-stroke: currentColor"
      >
        <path
          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  link: {
    type: String,
    required: true,
  },
});
</script>
