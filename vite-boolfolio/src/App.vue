<script >
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  Name: 'App',
  components: {
    ProjectCard
  },
  data() {

    return {
      myurl: 'http://127.0.0.1:8000/',
      api_Boolfolio: 'api/projects',
      projects: [],

    }
  },


  methods: {

  },
  mounted() {

    axios.get(this.myurl + this.api_Boolfolio)
      .then(response => {
        console.log(response);
        this.projects = response.data.result
      }).catch(err => {
        console.error(err);
      })

  }


};

</script>


<template>
  <section>
    <!-- <AppHeader></AppHeader>
    <router-view></router-view> -->
    <div class="container">
      <h1 class="text-center">All my project</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 mt-2">
        <ProjectCard v-for="project in projects" />
      </div>
    </div>

  </section>
</template>

<style></style>
