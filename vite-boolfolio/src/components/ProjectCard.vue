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
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 mt-2">
        <div class="col">
            <div class="card">
                <img width="300" :src="myurl + 'storage/' + project.cover_image" alt="">

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
    </div>
</template>

<style ></style>