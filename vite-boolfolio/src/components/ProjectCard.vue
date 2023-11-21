<script >

export default {
    name: 'ProjectCard',

    props: {
        project: Object,
        myurl: String,
    }

}

</script>




<template>
    <div class="container mt-2">
        <div class="row">
            <div class="col-sm-6 col-md-3">
                <div class="card mb-4">
                    <img width="300" v-if="project.cover_image.includes('https')" :src="project.cover_image">
                    <img width="300" v-else :src="'http://127.0.0.1:8000/storage/' + project.cover_image">
                    <div class="card-body">
                        <h4>{{ project.title }}</h4>
                        <h6>{{ project.description }}</h6>
                        <div>
                            <small>Link Git Hub:</small> <a :href="project.github">{{ project.github }}</a>
                        </div>
                        <div>
                            <small>Link to Project:</small> <a :href="project.r_link">{{ project.r_link }} </a>
                        </div>
                        {{ project.types }}
                        {{ project.technologies }}
                    </div>
                </div>
            </div>
            <!-- Ripeti il blocco di codice precedente per ogni progetto rimanente -->
        </div>
    </div>
</template>

<style ></style>