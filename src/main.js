import Vue from 'vue';
import "./style.scss";

import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";

import VueResource from "vue-resource";
Vue.use(VueResource);

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
        movies: [],
        genre: [],
        time: []
    },
    components: {
        "movie-list": MovieList,
        "movie-filter": MovieFilter
    },
    created: function onCreate() {
        this.$http.get("/api").then(response => {
            this.movies = response.data;
        });
    }
});