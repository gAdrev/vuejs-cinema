import Vue from 'vue';
import "./style.scss";

import VueResource from "vue-resource";
Vue.use(VueResource);

import moment from "moment-timezone";
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", {
    get: function get() {
        return this.$root.moment;
    }
});

import { checkFilter, setDay } from "./util/bus";

const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", {
    get: function get() {
        return this.$root.bus;
    }
})

import VueRouter from 'vue-router';
import routes from './util/routes';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: routes
});

new Vue({
    el: '#app',
    data: {
        movies: [],
        genre: [],
        time: [],
        moment: moment,
        day: moment(),
        bus: bus
    },
    created: function onCreate() {
        this.$http.get("/api").then(response => {
            this.movies = response.data;
        });
        this.$bus.$on("check-filter", checkFilter.bind(this));
        this.$bus.$on("set-day", setDay.bind(this));
    },
    router: router
});