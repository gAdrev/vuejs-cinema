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
                var movieGenres = movie.movie.Genre.split(", "),
                    i;
                for(i=0; i<this.genre.length; i++) {
                    if (movieGenres.indexOf(this.genre[i]) === -1)
                        return false;
                }
                return true;
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