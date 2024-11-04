<template>
  <div class="flex justify-center w-full">
    <header
      class="p-5 shadow-md bg-white dark:bg-gray-800 fixed z-50 md:mr-0 md:flex md:items-center md:justify-between w-full"
    >
      <div class="flex justify-between items-center">
        <span class="text-3xl cursor-pointer mx-2 md:hidden block"> </span>
      </div>
      <toggleMode />
      <ul class="hidden md:flex text-black text-xl mr-10 dark:text-white">
        <li class="mx-4 my-6 md:my-0">
          <router-link
            to=""
            @click="scrollToTop"
            class="hover:text-blue-500 cursor-pointer duration-500 focus:text-blue-500"
            :class="{ 'text-blue-500': $route.hash === '#home' }"
            >HOME</router-link
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <router-link
            to=""
            @click="scrollToProjects"
            class="hover:text-blue-500 cursor-pointer duration-500 focus:text-blue-500"
            :class="{ 'text-blue-500': $route.hash === '#projects' }"
            >PROJECTS</router-link
          >
        </li>
        <li class="mx-4 my-6 md:my-0">
          <router-link
            to=""
            @click="scrollToContact"
            class="hover:text-blue-500 cursor-pointer duration-500 focus:text-blue-500"
            :class="{ 'text-blue-500': $route.hash === '#contact' }"
            >CONTACT</router-link
          >
        </li>
      </ul>

      <!--Phone-->
      <svg
        v-if="!linksVisible"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 font-bold md:hidden text-black dark:text-white cursor-pointer"
        @click="toggleLinksVisibility"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        v-else
        @click="toggleLinksVisibility"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 md:hidden text-black dark:text-white cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>


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
              :class="{ 'text-blue-500': $route.hash === '#home' }"
              >HOME</router-link
            >
          </li>
          <li class="mx-4 my-6 md:my-0">
            <router-link
              to=""
              @click="scrollToProjectsMobile"
              class="text-xl focus:text-blue-500 hover:text-blue-500 duration-500"
              :class="{ 'text-blue-500': $route.hash === '#projects' }"
              >PROJECTS</router-link
            >
          </li>
          <li class="mx-4 my-6 md:my-0">
            <router-link
              to=""
              @click="scrollToContactMobile"
              class="text-xl focus:text-blue-500 hover:text-blue-500 duration-500"
              :class="{ 'text-blue-500': $route.hash === '#contact' }"
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
import { useRouter } from "vue-router";
import toggleMode from "./toggleMode.vue";
const router = useRouter();

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
    mobileMenuOpen.value = false;
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
  color: #3490dc;
}

</style>
