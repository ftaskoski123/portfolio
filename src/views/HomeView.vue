<template>
  <!-- <main class="flex justify-center items-center">
    <div>
      <h3 class="text-6xl flex ml-4 items-center font-semibold text-black dark:text-white">
        Front-End
        <span class="vue-icon ml-4 mr-4 font-semibold">Vue</span>
        Developer
      </h3>
    </div>

    <div class="relative">
      <div class="wavy-bubble"></div>
    </div>
  </main>

  <p class="text-black text-xl dark:text-white font-semibold mt-8 mr-80 text-center">Hi, I'm Filip Tashkoski, a dedicated Front-End Vue <br> Developer based in Skopje, Macedonia.</p>

  <div class="flex justify-center mt-40 mr-96 items-center">
    <p class="text-3xl text-black dark:text-white">Tech Stack</p>
    <div class="hidden md:block mx-4 border-l border-black dark:border-white h-16"></div>
    <div class="flex">
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105"
        src="https://skillicons.dev/icons?i=html,css"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8"
        src="https://skillicons.dev/icons?i=js,ts"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8"
        src="https://skillicons.dev/icons?i=vue,firebase"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8"
        src="https://skillicons.dev/icons?i=tailwind"
      />
    </div>
  </div> -->
  <!-- phone -->
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
      <div class="wavy-bubble " style="width: 15rem; height: 15rem;"></div>
      <!-- <div class=></div> -->
    </div>
  
</main>
<p class="text-black text-xl dark:text-white font-semibold mt-8 mr-2 text-center">Hi, I'm Filip Tashkoski, a dedicated Front-End Vue <br> Developer based in Skopje, Macedonia.</p>

<div class="flex flex-col items-center mt-8">
    <p class="text-2xl text-black dark:text-white mb-4">Tech Stack</p>
    <div class="mx-4 border-t border-black dark:border-white w-20 mb-4 md:hidden"></div>
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


    <!-- <div class="relative">
      <div class="wavy-bubble"></div>
    </div>
  </main> -->

  <!-- <p class="text-black text-xl dark:text-white font-semibold mt-8 mr-80 text-center">Hi, I'm Filip Tashkoski, a dedicated Front-End Vue <br> Developer based in Skopje, Macedonia.</p>

  <div class="flex justify-center mt-40 mr-96 items-center">
    <p class="text-3xl text-black dark:text-white">Tech Stack</p>
    <div class="hidden md:block mx-4 border-l border-black dark:border-white h-16"></div>
    <div class="flex">
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105"
        src="https://skillicons.dev/icons?i=html,css"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8"
        src="https://skillicons.dev/icons?i=js,ts"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8"
        src="https://skillicons.dev/icons?i=vue,firebase"
      />
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 ml-8"
        src="https://skillicons.dev/icons?i=tailwind"
      />
    </div>
  </div> -->
</template>

<script setup></script>

<style scoped>
.wavy-bubble {
  @apply relative -translate-x-2/4 -translate-y-2/4 w-[25rem] h-[25rem] animate-[morph_8s_ease-in-out_infinite] bg-[url("../assets/slika.jpg")] bg-cover bg-center bg-no-repeat rounded-[50%] border-[3px] border-solid border-[#2d2e32] left-44 top-[140px];
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
