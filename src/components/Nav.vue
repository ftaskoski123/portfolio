<template>
  <div class="flex justify-center">
    <header
      class="p-5 shadow-md bg-white rounded-full mt-6 md:flex md:items-center md:justify-between"
    >
      <div class="flex justify-between items-center">
        <span
          class="text-3xl cursor-pointer mx-2 md:hidden block"
          @click="toggleMobileMenu"
        >
        </span>
      </div>
      <ul class="hidden md:flex">
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl hover:text-cyan-500 duration-500 focus:text-cyan-500"
            >HOME</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl hover:text-cyan-500 duration-500 focus:text-cyan-500"
            >SERVICE</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl hover:text-cyan-500 duration-500 focus:text-cyan-500"
            >ABOUT</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl hover:text-cyan-500 duration-500 focus:text-cyan-500"
            >CONTACT</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl hover:text-cyan-500 duration-500 focus:text-cyan-500"
            >BLOG'S</a
          >
        </li>
      </ul>

      <!--Phone-->
      <input
        @click="toggleLinksVisibility"
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        class="menu md:hidden mt-1"
      />
      <ul
        v-if="mobileMenuOpen || linksVisible"
        class="rounded-lg md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto py-2 pl-9 md:opacity-100 md:rounded-none md:mt-0 mt-8"
      >
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl focus:text-cyan-500 hover:text-cyan-500 duration-500"
            >HOME</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl focus:text-cyan-500 hover:text-cyan-500 duration-500"
            >SERVICE</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl focus:text-cyan-500 hover:text-cyan-500 duration-500"
            >ABOUT</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl focus:text-cyan-500 hover:text-cyan-500 duration-500"
            >CONTACT</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="text-xl focus:text-cyan-500 hover:text-cyan-500 duration-500"
            >BLOG'S</a
          >
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const mobileMenuOpen = ref<boolean>(false);
const linksVisible = ref<boolean>(false);

function toggleMobileMenu(): void {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
function toggleLinksVisibility(): void {
  linksVisible.value = !linksVisible.value;
}

function closeLinksOnResize() {
  if (window.innerWidth > 768) {
    linksVisible.value = false;
  }
}

onMounted(() => {
  window.addEventListener("resize", closeLinksOnResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", closeLinksOnResize);
});
</script>

<style scoped>
.menu {
  --s: 30px; /* control the size */
  --c: black; /* the color */

  height: var(--s);
  aspect-ratio: 1;
  border: none;
  padding: 0;
  border-inline: calc(var(--s) / 2) solid #0000;
  box-sizing: content-box;
  --_g1: linear-gradient(var(--c) 20%, #0000 0 80%, var(--c) 0) no-repeat
    content-box border-box;
  --_g2: radial-gradient(circle closest-side at 50% 12.5%, var(--c) 95%, #0000)
    repeat-y content-box border-box;
  background: var(--_g2) left var(--_p, 0px) top,
    var(--_g1) left calc(var(--s) / 10 + var(--_p, 0px)) top,
    var(--_g2) right var(--_p, 0px) top,
    var(--_g1) right calc(var(--s) / 10 + var(--_p, 0px)) top;
  background-size: 20% 80%, 40% 100%;
  position: relative;
  clip-path: inset(0 25%);
  -webkit-mask: linear-gradient(90deg, #0000, #000 25% 75%, #0000);
  cursor: pointer;
  transition: background-position 0.3s var(--_s, 0.3s),
    clip-path 0s var(--_s, 0.6s);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.menu:before,
.menu:after {
  content: "";
  position: absolute;
  border-radius: var(--s);
  inset: 40% 0;
  background: var(--c);
  transition: transform 0.3s calc(0.3s - var(--_s, 0.3s));
}

.menu:checked {
  clip-path: inset(0);
  --_p: calc(-1 * var(--s));
  --_s: 0s;
}
.menu:checked:before {
  transform: rotate(45deg);
}
.menu:checked:after {
  transform: rotate(-45deg);
}
.menu:focus-visible {
  clip-path: none;
  -webkit-mask: none;
  border: none;
  outline: 2px solid var(--c);
  outline-offset: 5px;
}
</style>
