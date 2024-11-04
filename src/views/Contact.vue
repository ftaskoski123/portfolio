<template >
    <div class="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div>
    <h3
      class="flex justify-center mt-12 text-2xl tracking-tight font-black font-serif  text-black dark:text-white"
    >
    DROP A MESSAGE ! 🤙🏼
    </h3>
  </div>

  <!--Location-->
  
  <div class="flex justify-center items-center mt-20">
    <div class="rounded-full shadow-2xl bg-white inline-block p-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-blue-500"
      >
        <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
        <path d="M9 4v13"></path>
        <path d="M15 7v5"></path>
        <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
        <path d="M20.2 20.2l1.8 1.8"></path>
      </svg>
    </div>
  </div>
  <h3
    class="text-xl text-center mt-2 font-semibold text-gray-900 dark:text-white"
  >
    Location
  </h3>
  <p
    class="text-[#555] text-base font-medium leading-[1.6] dark:text-white mt-2 mr-2 text-center"
  >
 Skopje, Macedonia<br />
  </p>

  <!--Email-->
  <div class="flex justify-center items-center mt-20">
    <div class="rounded-full shadow-2xl bg-white inline-block p-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
    </div>
  </div>
  <h3
    class="text-xl text-center mt-2 font-semibold text-gray-900 dark:text-white"
  >
    E-mail
  </h3>
  <p
    class="text-[#555] text-base font-medium leading-[1.6] dark:text-white mt-2 mr-2 text-center"
  >
 taskoskif@gmail.com<br />
  </p>
</div>
</template>

<style scoped>
@supports (-webkit-overflow-scrolling: touch) {
  header {
    position: fixed;
    top: 0;
  }
}
</style>