import Vue from 'vue';
import "./style.scss";

import genres from "./util/genres";

new Vue({
    el: '#app',
    data: {
        msg: "Hello Vue cinema"
    },
    components: {
        'movie-list': {
            template: `<div id="movie-list">
    <div class="movie" v-for="movie in movies">
        {{ movie.title }}
    </div>
</div>`,
            data: function() {
                return {
                    movies: [
                        { title: "Pulp Fiction" },
                        { title: "Home Alone" },
                        { title: "The Big Lebowski" }
                    ]
                };
            }
        },
        'movie-filter': {
            data: function() {
                return {
                    genres
                };
            },
            template: `<div id="movie-filter">
    <h2>Filter results</h2>
    <div class="filter-group">
    <check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>
    </div>
</div>`,
            components: {
                "check-filter": {
                    data: function() {
                        return {
                            checked: false
                        };
                    },
                    props: ["title"],
                    template: `<div v-bind:class="{ 'check-filter': true, active: checked }"
                                    v-on:click="checked = !checked">
                        <span class="checkbox"></span>
                        <span class="checkbox-filter-title">{{ title }}</span>
                    </div>`

                }
            }
        }
    }
});