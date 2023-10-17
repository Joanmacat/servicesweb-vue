import { createRouter, createWebHistory } from "vue-router";

import AddItemView from "../views/AddItemView.vue";
import DeleteItemView from "../views/DeleteItemView.vue";
import HomeView from "../views/HomeView.vue";

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
  ],
});

export default router;
