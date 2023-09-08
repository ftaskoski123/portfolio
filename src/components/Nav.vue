<template>
      <div class="flex justify-center">

    <header class="p-5 shadow-md bg-white rounded-full mt-6  md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <span class="text-3xl cursor-pointer mx-2 md:hidden block" @click="toggleMobileMenu">
          <ion-icon name="menu"></ion-icon>
        </span>
      </div>
      <ul class="hidden md:flex">
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">HOME</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">SERVICE</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">CONTACT</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">BLOG'S</a>
        </li>
      </ul>
      


      <!--Phone-->
      <!-- Add a button to toggle visibility -->
      <button class="md:hidden block shadow-md rounded-lg bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500" @click="toggleLinksVisibility">
        Show Links
      </button>
  
      
      <ul
        v-if="mobileMenuOpen || linksVisible"
        class="rounded-lg  md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto  py-2  pl-9 md:opacity-100 md:rounded-none md:mt-0 mt-8">


        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">HOME</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">SERVICE</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">CONTACT</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">BLOG'S</a>
        </li>


      </ul>
    </header>
</div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        mobileMenuOpen: false,
        linksVisible: false, // New data property to track link visibility
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
      },
      toggleLinksVisibility() {
        this.linksVisible = !this.linksVisible; // Toggle link visibility when the button is clicked
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your responsive CSS styles here */
  @media (max-width: 768px) {
    /* Adjust the styles for screens with a maximum width of 768px (e.g., mobile devices) */
    .md:flex {
      display: none;
    }
    .md:hidden {
      display: block;
    }
  }
  </style>