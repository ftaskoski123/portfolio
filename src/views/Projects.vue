<template>
  <div
    class="px-4 md:mt-80 lg:mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 overflow-hidden"
  >
    <div>
      <h3
        class="flex justify-center 2xl:mt-[20rem] mt-12 text-2xl tracking-tight font-black font-serif text-black dark:text-white"
      >
        MY WORK OF ART ! ⬇️
      </h3>
    </div>
    <!-- card look -->
    <Card data-aos="zoom-out-right">
      <!-- project photo -->
      <div
        class="flex justify-center 2xl:w-[550px] items-center rounded-2xl shadow-md"
      >
        <div
          class="h-[350px] w-[550px] rounded-2xl bg-black transition-transform hover-transition ease-in-out bg-[url('@/assets/ss.png')] bg-cover bg-top hover:bg-bottom"
        ></div>
      </div>

      <projectDescription
        :title="'Find a Coach 🧑‍🏫'"
        :description="`Welcome to the 'Find a Coach' project, a platform where users can
          search for coaches in various fields such as frontend development,
          backend development, and career guidance. Whether you're looking to
          learn, improve your skills, or seek guidance in your career, this app
          helps you connect with experienced coaches.`"
        :technology1="'Vue'"
        :technology2="'Firebase'"
      />
    </Card>

    <!-- card look -->
    <Card>
      <!-- project photo -->
      <div
        class="flex justify-center 2xl:w-[550px] items-center rounded-2xl shadow-md"
      >
        <div
          class="h-[350px] w-[550px] rounded-2xl bg-black transition-transform hover-transition ease-in-out bg-[url('@/assets/ss.png')] bg-cover bg-top hover:bg-bottom"
        ></div>
      </div>

      <projectDescription
        :title="'Find a Coach 🧑‍🏫'"
        :description="`Welcome to the 'Find a Coach' project, a platform where users can
          search for coaches in various fields such as frontend development,
          backend development, and career guidance. Whether you're looking to
          learn, improve your skills, or seek guidance in your career, this app
          helps you connect with experienced coaches.`"
        :technology1="'Vue'"
        :technology2="'Firebase'"
      />
    </Card>

    <!-- card look -->
    <Card data-aos="zoom-out-right">
      <!-- project photo -->
      <div
        class="flex justify-center 2xl:w-[550px] items-center rounded-2xl shadow-md"
      >
        <div
          class="h-[350px] w-[550px] rounded-2xl bg-black transition-transform hover-transition ease-in-out bg-[url('@/assets/ss.png')] bg-cover bg-top hover:bg-bottom"
        ></div>
      </div>

      <projectDescription
        :title="'Find a Coach 🧑‍🏫'"
        :description="`Welcome to the 'Find a Coach' project, a platform where users can
          search for coaches in various fields such as frontend development,
          backend development, and career guidance. Whether you're looking to
          learn, improve your skills, or seek guidance in your career, this app
          helps you connect with experienced coaches.`"
        :technology1="'Vue'"
        :technology2="'Firebase'"
      />
    </Card>


    <!-- card look -->
    <Card>
      <!-- project photo -->
      <div
        class="flex justify-center 2xl:w-[550px] items-center rounded-2xl shadow-md"
      >
        <div
          class="h-[350px] w-[550px] rounded-2xl bg-black transition-transform hover-transition ease-in-out bg-[url('@/assets/ss.png')] bg-cover bg-top hover:bg-bottom"
        ></div>
      </div>

      <projectDescription
        :title="'Find a Coach 🧑‍🏫'"
        :description="`Welcome to the 'Find a Coach' project, a platform where users can
          search for coaches in various fields such as frontend development,
          backend development, and career guidance. Whether you're looking to
          learn, improve your skills, or seek guidance in your career, this app
          helps you connect with experienced coaches.`"
        :technology1="'Vue'"
        :technology2="'Firebase'"
      />
    </Card>
  </div>
</template>

<style scoped>
.hover-transition {
  transition: 5s;
}
</style>

<script setup>
import Card from "../components/Card.vue";
import projectDescription from "../components/projectDescription.vue";
</script>
