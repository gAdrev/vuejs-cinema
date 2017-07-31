import Vue from 'vue';
import "./style.scss";

import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";

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
        "movie-list": MovieList,
        "movie-filter": MovieFilter
    }
});