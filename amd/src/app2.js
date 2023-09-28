import Vue from 'tool_vue/vue2';
import VueRouter from "tool_vue/vue2-router";
import Home from "local_vue/components/Home.vue";
import App1 from "local_vue/components/App1.vue";
import App2 from "local_vue/components/App2.vue";

export const init = (selector) => {

    Vue.use(VueRouter);

    const routes = [
        { path: "/", component: Home},
        { path: "/app1", component: App1 },
        { path: "/app2", component: App2 },
    ];

    const router = new VueRouter({
        routes
    });

    new Vue({
        el: selector,
        router: router
    });

};

export default {
    init
};
