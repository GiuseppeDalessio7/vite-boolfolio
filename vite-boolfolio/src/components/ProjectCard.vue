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
            <img width="300" :src="this.myurl + 'storage/' + project.cover_image" alt="">
            <img :src="project.cover_image" alt="">


            <div class="card-body">
                <h4>{{ project.title }}</h4>
                <h6>{{ project.description }}</h6>
                <div>
                    <small>Link Git Hub:</small> <a href="#"> {{ project.github }}</a>
                </div>
                <div>
                    <small>Link to Project:</small> <a href="#">{{ project.r_link }} </a>
                </div>

                {{ project.types }}

                {{ project.technologies }}
            </div>
        </div>
    </div>
    <div>
    </div>
</template>

<style ></style>