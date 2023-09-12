<template>
  <div class="flex justify-center">
    <button
      @click="toggleDark()"
      class="px-2 py-2 text-white shadow-md  transition-transform duration-500 ease-in-out hover:scale-105 bg-gray-700 rounded-full dark:bg-white absolute top-3 right-3"
    >
      <span v-if="dark">
        <img src="../assets/sun.png" alt="Sun Icon" class="rounded w-8 h-8" />
      </span>
      <span v-else>
        <img src="../assets/moon.png" alt="Moon Icon" class="rounded w-8 h-8" />
      </span>
    </button>

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
      <ul class="hidden md:flex text-black text-xl">
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="hover:text-cyan-500  duration-500 focus:text-cyan-500"
            >HOME</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="hover:text-cyan-500 duration-500 focus:text-cyan-500"
            >SERVICE</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <router-link to="/about"
            class="hover:text-cyan-500 cursor-pointer duration-500 focus:text-cyan-500"
            >ABOUT</router-link
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="hover:text-cyan-500 duration-500 focus:text-cyan-500"
            >CONTACT</a
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a
            href="#"
            class="hover:text-cyan-500 duration-500 focus:text-cyan-500"
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
        class="menu md:hidden mt-1 "
      />

      <transition name="fade-slide">
        <ul
          v-if="mobileMenuOpen || linksVisible"
          class="rounded-lg md:flex  md:items-center z-10 md:z-auto md:static fixed text-black bg-white  w-screen h-screen left-0  md:w-auto py-2 pl-9 md:opacity-100 md:rounded-none md:mt-0 mt-8"
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
      </transition>
    </header>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const dark = useDark();
const toggleDark = useToggle(dark);

const mobileMenuOpen = ref<boolean>(false);
const linksVisible = ref<boolean>(false);
const overflow = ref<boolean>(false);

function toggleMobileMenu(): void {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function toggleLinksVisibility(): void {
  linksVisible.value = !linksVisible.value;
  overflow.value = !overflow.value;

  if (overflow.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
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

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease-in;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-50px);
  transition: transform 0.5s ease-in, opacity 0.3s ease-in;
}


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
