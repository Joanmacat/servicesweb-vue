import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";

import DashboardView from "../views/DashboardView.vue";
import DeleteItemView from "../views/DeleteItemView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import AuthView from "../views/AuthView.vue";

const auth = getAuth();

const requireAuth = (to, from, next) => {
  if (!auth.currentUser) {
    // El usuario no está autenticado, redirige a la página de inicio de sesión
    next({ name: "" });
  } else {
    // El usuario está autenticado, permite la navegación
    next();
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/dashboard",
      component: DashboardView,
      meta: { requiresAuth: true },
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
      path: "/administrador",
      component: AuthView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Verifica si la ruta requiere autenticación y si el usuario está autenticado
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    // Redirige a la página de inicio de sesión si no está autenticado
    next({ name: "" });
  } else {
    next();
  }
});

export default router;
