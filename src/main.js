import Vue from 'vue';
import "./style.scss";

import genres from "./util/genres";

new Vue({
    el: '#app',
    methods: {
        checkFilter: function(category, title, checked) {
            if (checked) {
                this[category].push(title);
            } else {
                let index = this[category].indexOf(title);
                if (index > -1 ) {
                    this[category].splice(index, 1);
                }
            }
        }
    },
    data: {
        msg: "Hello Vue cinema",
        genre: [],
        time: []
    },
    components: {
        'movie-list': {
            template: `<div id="movie-list">
                            <div class="movie" v-for="movie in movies">
                                {{ movie.title }}
                            </div>
                       </div>`,
            props: ["genre", "time"],
            data: function() {
                return {
                    movies: [
                        { title: "Pulp Fiction", genre: genres.CRIME },
                        { title: "Home Alone", genre: genres.COMEDY },
                        { title: "The Big Lebowski", genre: genres.COMEDY }
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
    <check-filter v-for="genre in genres"
                  v-bind:title="genre"
                  v-on:check-filter="checkFilter"></check-filter>
    </div>
</div>`,
            methods: {
                checkFilter: function(category, title, state) {
                    this.$emit("check-filter", category, title, state);
                    console.log("parent cehckfilter");
                }
            },
            components: {
                "check-filter": {
                    data: function() {
                        return {
                            checked: false
                        };
                    },
                    props: ["title"],
                    template: `<div v-bind:class="{ 'check-filter': true, active: checked }"
                                    v-on:click="checkFilter">
                        <span class="checkbox"></span>
                        <span class="checkbox-filter-title">{{ title }}</span>
                    </div>`,
                    methods: {
                        checkFilter: function() {
                            this.checked = !this.checked;
                            this.$emit("check-filter", "genre", this.title, this.checked);
                        }
                    }

                }
            }
        }
    }
});