<template>
<div id="movie-list">
    <movie-item v-for="movie in filteredMovies" v-bind:movie="movie.movie"></movie-item>
</div>
</template>

<script>
    import genres from "../util/genres";
    import MovieItem from "./MovieItem.vue";
    export default {
        props: ["genre", "time", "movies"],
        methods: {
            moviePassesGenreFilter: function(movie) {
                return this.genre.length === 0 ||
                        this.genre.indexOf(movie.genre) > -1;
            }
        },
        computed: {
            filteredMovies: function() {
                return this.movies.filter(this.moviePassesGenreFilter);
            }
        },
        components: {
            MovieItem
        }
    }
</script>