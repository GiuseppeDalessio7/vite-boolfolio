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
    <div class="col">
        <div class="card">
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
            </div>


        </div>
    </div>
</template>

<style ></style>