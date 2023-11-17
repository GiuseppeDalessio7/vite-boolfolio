<script >
import axios from 'axios';

export default {
  Name: 'App',
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
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 mt-2">
        <div class="col" v-for="project in   projects  ">
          <div class="card">
            <img width="300" :src="this.myurl + 'storage/' + project.cover_image" alt="">

            <div class="card-body">
              <h4>{{ project.title }}</h4>
              <h6>{{ project.description }}</h6>

            </div>
          </div>
        </div>
        <div>


        </div>
      </div>
    </div>

  </section>
</template>

<style></style>
