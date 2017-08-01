<template>
<div id="movie-list">
    <div v-if="filteredMovies.length">
        <movie-item v-for="movie in filteredMovies"
                    v-bind:movie="movie.movie"
                    v-bind:sessions="movie.sessions"
                    v-bind:day="day"></movie-item>
    </div>
    <div v-else-if="movies.length" class="no-results">
        No results.
    </div>
    <div v-else>
        Loading...
    </div>
</div>
</template>

<script>
    import genres from "../util/genres";
    import MovieItem from "./MovieItem.vue";
    export default {
        props: ["genre", "time", "movies", "day"],
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
        },
        created: function() {
            console.log("moment");
            console.log(this.$moment);
        }
    }
</script>