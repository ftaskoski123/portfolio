<template>
    <main class="flex justify-center items-center ">
      <div class="relative">
        <div class="wavy-bubble"></div>
      </div>
      <div class="flex justify-center items-center absolute bottom-1/2 transform translate-y-1/2">
        <p class="text-3xl text-black dark:text-white">Tech Stack</p>
        <div class="hidden md:block mx-4 border-l   border-black dark:border-white h-16"></div>
        <div class="flex">
          <img class="transition-transform duration-500 ease-in-out hover:scale-105" src="https://skillicons.dev/icons?i=html,css" />
          <img class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8" src="https://skillicons.dev/icons?i=js,ts" />
          <img class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8" src="https://skillicons.dev/icons?i=vue,firebase" />
          <img class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8" src="https://skillicons.dev/icons?i=tailwind" />
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .wavy-bubble {
    position: relative;
    top: 400px;
    left: 300%;
    transform: translate(-50%, -50%);
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    animation: morph 8s ease-in-out infinite;
    border: 3px solid #2d2e32;
    background-image: url("../assets/slika.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @apply dark:border-white;
  }
  
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  
  }
  
  @media (max-width: 767px) {
    .flex {
      flex-wrap: wrap;
    }

  
    .ml-8 {
      margin-left: 15px;
    }
    /* Show the horizontal line on smaller screens */
    .md\\:block {
      display: block;
    }
    .border-black {
      border-top: none;
    }
    .w-16 {
      width: 100%;
    }
    .md:w-auto {
      width: auto;
    }
    .md:mx-0 {
      margin: 0;
    }
    .h-16 {
      height: auto;
      margin-top: 1rem;
    }
    .ml-4 {
      margin-left: 1rem;
    }
    .text-center {
      text-align: center;
    }
    .text-left {
      text-align: left;
    }
  }
  
  </style>
  