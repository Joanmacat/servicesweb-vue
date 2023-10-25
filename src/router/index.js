import { createRouter, createWebHistory } from "vue-router";

import AddItemView from "../views/AddItemView.vue";
import DeleteItemView from "../views/DeleteItemView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import AuthView from "../views/AuthView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/additem",
      component: AddItemView,
    },
    {
      path: "/deleteitem",
      component: DeleteItemView,
    },
    {
      path: "/about",
      component: AboutView,
    },
    {
      path: "/contact",
      component: ContactView,
    },
    {
      path: "/dashboard",
      component: AuthView,
    },
  ],
});

export default router;
