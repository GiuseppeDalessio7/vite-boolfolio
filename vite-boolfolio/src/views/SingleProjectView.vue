<script>

import axios from 'axios';

export default {
    setup() {

        return {}
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
    <div>

    </div>
</template>



<style lang="scss" scoped></style>