<template>
  <!-- phone -->
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <main class="text-center p-4">
    <div>
      <h3 class="text-4xl sm:text-6xl font-semibold text-black dark:text-white">
        Front-End
      </h3>
      <h3 class="text-4xl sm:text-6xl font-semibold text-black dark:text-white">
        <span class="vue-icon ml-4 mr-4 font-semibold">Vue</span>
      </h3>
      <h3 class="text-4xl sm:text-6xl font-semibold text-black dark:text-white">
        Developer
      </h3>
    </div>
    <div class="relatives">
      <div class="wavy-bubble"></div>
      <!-- <div class=></div> -->
    </div>
  </main>
  <p
    class="text-[#555] text-base font-medium leading-[1.6] dark:text-white mt-8 mr-2 text-center"
  >
    Hi, I'm Filip Tashkoski, a dedicated Front-End Vue <br />
    Developer based in Skopje, Macedonia.<br />
  </p>

  <!-- SVG's-->
  <div class="text-black flex justify-center items-center mr-3 mt-10">
    <!-- Github -->
    <a href="https://github.com/ftaskoski123" target="_blank">
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
        class="focus:text-blue-500 hover:text-blue-500 mr-4"
        data-darkreader-inline-stroke=""
        style="--darkreader-inline-stroke: currentColor"
      >
        <path
          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
        ></path>
      </svg>
    </a>
    <!-- Linkedin -->
    <a
      href="https://www.linkedin.com/in/filip-taskoski-249796243/"
      target="_blank"
    >
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
        class="focus:text-blue-500 hover:text-blue-500"
        data-darkreader-inline-stroke=""
        style="--darkreader-inline-stroke: currentColor"
      >
        <path
          d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
        ></path>
        <path d="M8 11l0 5"></path>
        <path d="M8 8l0 .01"></path>
        <path d="M12 16l0 -5"></path>
        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
      </svg>
    </a>
  </div>

  <!-- Tech Stack -->
  <div class="flex flex-col items-center mt-8">
    <p class="text-2xl text-black dark:text-white mb-4">Tech Stack</p>
    <div
      class="mx-4 border-t border-black dark:border-white w-20 mb-4 md:hidden"
    ></div>
    <div class="flex flex-wrap justify-center">
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 mb-4 mx-2"
        src="https://skillicons.dev/icons?i=html,css"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 mb-4 mx-2"
        src="https://skillicons.dev/icons?i=js,ts"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 mb-4 mx-2"
        src="https://skillicons.dev/icons?i=vue,firebase"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 mb-4 mx-2"
        src="https://skillicons.dev/icons?i=tailwind"
      />
    </div>
  </div>
</div>
</template>

<script setup></script>

<style scoped>
.wavy-bubble {
  @apply relative -translate-x-2/4 -translate-y-2/4 w-[15rem] h-[15rem] animate-[morph_8s_ease-in-out_infinite] bg-[url("../assets/slika.jpg")] bg-cover bg-center bg-no-repeat rounded-[50%] border-[3px] border-solid border-[#2d2e32] left-44 top-[140px] ;
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

.vue-icon {
  background-image: linear-gradient(to bottom, #41b883, #34495e);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
