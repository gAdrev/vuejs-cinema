<template>
<div id="movie-list">
    <div v-if="filteredMovies.length">
        <movie-item v-for="movie in filteredMovies"
                    v-bind:movie="movie.movie"
                    v-bind:sessions="movie.sessions"
                    v-bind:day="day"
                    v-bind:time="time" ></movie-item>
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
    import times from "../util/times";
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
            },
            sessionPassesTimeFilter: function sessionPassesTimeFilter(session) {
                if (!this.day.isSame(this.$moment(session.time), "day")) {
                    return false;
                } else if (this.time.length === 0 ||
                           this.time.length === 2) {
                    // No filter selected or both filters selected
                    return true;
                } else if (this.time[0] === times.AFTER_6PM) {
                    return this.$moment(session.time).hour() >= 18;
                } else {
                    // this.time[0] === times.AFTER_6PM
                    return this.$moment(session.time).hour() < 18;
                }
            }
        },
        computed: {
            filteredMovies: function() {
                return this.movies
                    .filter(this.moviePassesGenreFilter)
                    .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter));
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