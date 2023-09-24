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
    <div v-for="(project, index) in projects" :key="index">
      <Card :data-aos="project.animation">
        <projectPhoto :image="project.image" />

        <projectDescription
          :title="project.title"
          :description="project.description"
          :technology1="project.technology1"
          :technology2="project.technology2"
          :githublink="project.githublink"
          :livedemo="project.livedemo"
        />
      </Card>
    </div>
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
import projectPhoto from "../components/projectPhoto.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const projects = ref([]);

async function getData() {
  try {
    const response = await axios.get(
      "https://projects-1ac60-default-rtdb.firebaseio.com/projects.json"
    );
    projects.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

onMounted(() => {
  getData();
});
</script>
