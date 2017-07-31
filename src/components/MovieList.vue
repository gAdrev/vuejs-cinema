<template>
<div id="movie-list">
    <div class="movie" v-for="movie in filteredMovies">
        {{ movie.movie.Title }}
    </div>
</div>
</template>

<script>
    import genres from "../util/genres";
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
        }
    }
</script>