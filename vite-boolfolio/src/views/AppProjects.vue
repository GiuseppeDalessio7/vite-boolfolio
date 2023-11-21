<script>
import ProjectCard from '../components/ProjectCard.vue'
import axios from 'axios';


export default {
    name: 'AppProjects',
    data() {
        return {
            myurl: 'http://127.0.0.1:8000/',
            api_Boolfolio: 'api/projects',
            projects: [],

        }
    },
    components: {
        ProjectCard
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

}
</script>

<template>
    <main>
        <Projects />
        <div class="container mt-2">
            <div class="row row-cols-3">
                <ProjectCard v-for="project in projects" :project="project" :myurl="myurl" />
            </div>
        </div>
    </main>
</template>
<style></style>