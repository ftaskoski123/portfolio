<script setup>
import {RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

</script>

<template>

  <Nav/>
  <RouterView />
  <Footer/>
</template>

<style >
@tailwind utilities;

html.dark {
  color-scheme: dark;
}

@layer utilities {
  .bg-custom-color {
    background: linear-gradient(to bottom, #e2c7c7, #fbfcdb);
  }

  .dark .bg-custom-color-dark {
    background: linear-gradient(to bottom, #434343, #000000);
  }
}

body {
  @apply bg-custom-color dark:bg-custom-color-dark;
  font-family: Poppins,sans-serif;
}
</style>
