<template>
    <div id="movie-filter">
        <h2>Filter results</h2>
        <h3>By time of day</h3>
        <div class="filter-group">
            <check-filter v-for="time in times"
                        v-bind:title="time"
                        category="time"
                        v-on:check-filter="checkFilter"></check-filter>
        </div>
        <h3>By genre</h3>
        <div class="filter-group">
            <check-filter v-for="genre in genres"
                        v-bind:title="genre"
                        category="genre"
                        v-on:check-filter="checkFilter"></check-filter>
        </div>
    </div> 
</template>

<script>
import genres from "../util/genres";
import times from "../util/times";
import CheckFilter from "./CheckFilter.vue";

export default {
    data: function() {
        return {
            genres,
            times
        };
    },
    methods: {
        checkFilter: function(category, title, state) {
            this.$emit("check-filter", category, title, state);
            console.log("parent cehckfilter");
        }
    },
    components: {
        "check-filter": CheckFilter
    }
}
</script>

