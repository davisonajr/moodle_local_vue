import { createApp } from "tool_vue/vue3";
import VueRouter from "tool_vue/vue3-router";
import Home from "local_vue/components/Home.vue";
import App1 from "local_vue/components/App1.vue";
import App2 from "local_vue/components/App2.vue";

export const init = (selector) => {


  // 2. Define some routes
  // Each route should map to a component.
  // We'll talk about nested routes later.
  const routes = [
    { path: "/", component: Home},
    { path: "/app1", component: App1 },
    { path: "/app2", component: App2 },
  ];

  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  });

  // 5. Create and mount the root instance.
  const app = createApp({});
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router);

  app.mount(selector);
};

export default {
  init,
};
