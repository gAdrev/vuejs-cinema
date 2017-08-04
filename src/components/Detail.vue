<template>
    <div id="detail" v-if="movie">
        <movie-item v-bind:movie="movie.movie">
        </movie-item>
    </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
export default {
    props: [ "movies" ],
    computed: {
        movie: function movie() {
            const routeId = this.$route.params.id,
                  movie = this.movies.find(movie => movie.id === routeId);
            return movie ? movie : null;
        }
    },
    created: function created() {
        console.log(this.$route.params.id);
    },
    components: {
        MovieItem
    }
}
</script>

