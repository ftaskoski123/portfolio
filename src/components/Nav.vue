<template>
  <div class="flex justify-center w-full">
    <header
      class="p-5 shadow-md bg-white dark:bg-gray-800 fixed z-50 md:mr-0 md:flex md:items-center md:justify-between w-full"
    >
      <div class="flex justify-between items-center">
        <span class="text-3xl cursor-pointer mx-2 md:hidden block"> </span>
      </div>
      <button
        @click="toggleDark()"
        class="px-2 py-2 text-white shadow-md transition-transform duration-500 ease-in-out hover:scale-105 bg-gray-700 dark:bg-white rounded-full absolute top-4 right-4"
      >
        <span v-if="dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-gray-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </span>
        <span v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </span>
      </button>
      <ul class="hidden md:flex text-black text-xl mr-10 dark:text-white">
        <li class="mx-4 my-6 md:my-0">
          <router-link
            to=""
            @click="scrollToTop"
            class="hover:text-blue-500 cursor-pointer duration-500 focus:text-blue-500"
            >HOME</router-link
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <router-link
            to=""
            @click="scrollToProjects"
            class="hover:text-blue-500 cursor-pointer duration-500 focus:text-blue-500"
            >PROJECTS</router-link
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <router-link
            to=""
            @click="scrollToContact"
            class="hover:text-blue-500 cursor-pointer duration-500 focus:text-blue-500"
            >CONTACT</router-link
          >
        </li>
      </ul>

      <!--Phone-->
      <input
        @click="toggleLinksVisibility"
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        class="menu md:hidden"
      />

      <transition name="fade-slide">
        <ul
          v-if="mobileMenuOpen || linksVisible"
          class="md:flex mt-5 md:items-center z-10 md:z-auto md:static fixed text-black bg-white dark:bg-custom-dark dark:text-white w-screen h-screen left-0 md:w-auto py-2 pl-1 md:opacity-100 md:rounded-none md:mt-0"
        >
          <li class="mx-4 my-6 md:my-0">
            <router-link
              to=""
              @click="scrollToTopMobile"
              class="text-xl focus:text-blue-500 hover:text-blue-500 duration-500"
              >HOME</router-link
            >
          </li>
          <li class="mx-4 my-6 md:my-0">
            <router-link
              to=""
              @click="scrollToProjectsMobile"
              class="text-xl focus:text-blue-500 hover:text-blue-500 duration-500"
              >PROJECTS</router-link
            >
          </li>
          <li class="mx-4 my-6 md:my-0">
            <router-link
              to=""
              @click="scrollToContactMobile"
              class="text-xl focus:text-blue-500 hover:text-blue-500 duration-500"
              >CONTACT</router-link
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
import { useRouter } from "vue-router";
const router = useRouter();
const dark = useDark();
const toggleDark = useToggle(dark);

const mobileMenuOpen = ref<boolean>(false);
const linksVisible = ref<boolean>(false);
const overflow = ref<boolean>(false);

function toggleOverflow(): void {
  overflow.value = !overflow.value;
  if (overflow.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
function scrollToProjects() {
  const aboutSection = document.getElementById("projects");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
    router.push({ hash: "#projects" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  router.push({ hash: "#home" });
}

function scrollToContact() {
  const aboutSection = document.getElementById("contact");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
    router.push({ hash: "#contact" });
  }
}

function toggleLinksVisibility(): void {
  linksVisible.value = !linksVisible.value;
  mobileMenuOpen.value = !mobileMenuOpen.value;
  toggleOverflow();
}

function closeLinksOnResize() {
  if (window.innerWidth > 768) {
    linksVisible.value = false;
  }
}
function scrollToProjectsMobile(): void {
  scrollToProjects();
  toggleLinksVisibility();
}

function scrollToContactMobile(): void {
  scrollToContact();
  toggleLinksVisibility();
}

function scrollToTopMobile(): void {
  scrollToTop();
  toggleLinksVisibility();
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

.focused-link {
  color: #3490dc; /* Change to your desired color */
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
.menu-open {
  transform: rotate(45deg);
}

/* Styles for the closed menu icon (hamburger shape) */
.menu-closed {
  transform: rotate(0deg);
}
</style>
