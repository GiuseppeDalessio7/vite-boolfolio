<script >

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



  methods: {

  },



};

</script>


<template>
  <AppHeader></AppHeader>

  <router-view></router-view>
</template>

<style></style>