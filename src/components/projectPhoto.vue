<template>
  <div
    class="flex justify-center 2xl:w-[550px] items-center rounded-2xl shadow-md"
  >
    <div
      :class="[
        'h-[350px] w-[550px] rounded-2xl bg-black transition-transform hover-transition ease-in-out bg-cover bg-top hover:bg-bottom',
      ]"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
  </div>
</template>

<script setup>

defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.hover-transition {
  transition: 5s;
}
</style>
