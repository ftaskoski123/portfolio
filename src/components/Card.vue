<template>
  <div
    class="my-8 mb-40 dark:border-gray-900 dark:bg-custom-dark dark:shadow-md mx-auto p-6 2xl:flex 2xl:mx-16 border 2xl:mt-[10rem] lg:mx-4 lg:flex shadow-2xl rounded-xl"
    :data-aos=easing
    data-aos-mirror="false"
    data-aos-duration="1000"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
  >
    <slot></slot>
  </div>
</template>

<script setup>

defineProps({
  easing: {
    type: String,
    default: 'zoom-out-left',
  }
})
</script>