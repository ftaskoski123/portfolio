<template>
  <main class="flex justify-center items-center">
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

  <p class="text-black text-xl dark:text-white font-semibold mt-8 mr-80 text-center">Hi, I'm Filip Tashkoski. A Front-End Vue Developer based in Skopje Macedonia.</p>

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
  </div>
</template>

<script setup></script>

<style scoped>
.wavy-bubble {
  position: relative;
  top: 250px;
  left: 100%;
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

.vue-icon {
  background-image: linear-gradient(to bottom, #41b883, #34495e);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
