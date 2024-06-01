<template>
  <!-- phone -->
<div class="px-4 py-16 mt-20 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <main class="text-center p-4">
    <div class="2xl:ml-[7rem] 2xl:mt-40">
      <div class="2xl:flex 2xl:text-left">
          <h3 class="text-4xl sm:text-6xl font-semibold text-black dark:text-white">
            Full-Stack
          </h3>
          <h3 class="text-4xl sm:text-6xl text font-semibold text-black dark:text-white">
            <span class="vue-icon ml-2 font-semibold">Vue</span>
            and
            <span class="dotnet-icon font-semibold">.NET</span>
          </h3>
        </div>
      <h3 class="text-4xl sm:text-6xl 2xl:text-left  font-semibold text-black dark:text-white">
        Developer
      </h3>
    </div>
    <div class="relative 2xl:absolute flex items-center justify-center">
  <div class="wavy-bubble 2xl:ml-[52rem] ml-[-25%] md:ml-[-20%] lg:ml-[-15%] xl:ml-[-10%]"></div>
</div>
  </main>
  <p class="text-black text-base leading-[1.6] dark:text-slate-100 mt-8 mr-2 2xl:ml-[8rem] text-center 2xl:text-left">
      Hello! I'm a Full-Stack Vue.js and .NET Developer hailing from Skopje, Macedonia.<br> With a passion for crafting user-friendly and visually appealing web applications,<br> I thrive in the world of front-end and back-end development. In my role as a Full-Stack Developer, <br>I am dedicated to creating seamless and engaging user experiences.<br> Whether it's designing responsive and intuitive interfaces, optimizing web performance,<br> or troubleshooting cross-browser compatibility issues, I'm always up for the challenge.
    </p>

  <!-- SVG's-->
  <div class="text-black dark:text-slate-200 flex justify-center 2xl:relative items-center 2xl:mt-6 mr-3 mt-10 2xl:mr-[55rem]">
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
        class="focus:text-blue-500 hover:text-blue-500 mr-4 "
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
  <div class="flex flex-col 2xl:mt-40 2xl:ml-40 items-center mt-8 2xl:flex-row">
    <p class="text-2xl text-black dark:text-slate-200 mb-4">Tech Stack</p>

    <div class=" h-[1px] w-[115px] mb-4 2xl:h-[60px] 2xl:w-[1px] 2xl:mb-2 2xl:mx-2 bg-black dark:bg-white"></div>

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
      <img
        class="transition-transform duration-500 ease-in-out hover:scale-105 mb-4 mx-2"
        src="https://skillicons.dev/icons?i=net,cs"
      />
    </div>
  </div>
</div>
  
  
  <Projects id="projects"/>
  <Contact id="contact"/>
</template>



<style scoped>
.wavy-bubble {
  @apply relative -translate-x-2/4 -translate-y-2/4 w-[15rem] h-[15rem] animate-[morph_8s_ease-in-out_infinite] bg-[url("../assets/pic.jpg")] bg-cover bg-center bg-no-repeat rounded-[50%] border-[3px] border-solid border-[#2d2e32] left-44 top-[140px] 2xl:w-[25rem] 2xl:h-[25rem] dark:border-white;
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

.dotnet-icon {
  background-image: linear-gradient(to bottom, #512bd4, #008ed8);
  -webkit-background-clip: text;
  color: transparent;
}
</style>

<script setup>
import Projects from './Projects.vue';
import Contact from './Contact.vue';

</script>
