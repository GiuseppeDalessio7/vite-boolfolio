<script >
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppLayout from './components/AppLayout.vue';

export default {
  Name: 'App',
  components: {
    ProjectCard,
    AppHeader,
    AppLayout,
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
  <!-- <AppHeader></AppHeader>
    <router-view></router-view> -->
  <AppHeader></AppHeader>
  <AppLayout></AppLayout>
  <ProjectCard v-for="pro in projects" :project="pro" :myurl="myurl" />
</template>

<style></style>