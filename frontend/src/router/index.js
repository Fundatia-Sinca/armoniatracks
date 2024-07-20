import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomeView,
    },
    {
      path: "/devpage",
      name: "devpage",
      component: () => import("@/views/DevPage.vue"),
    },
    {
      path: "/tablepage",
      name: "tablepage",
      component: () => import("@/views/TablePage.vue"),
    },
    {
      path: "/loginpage",
      name: "loginpage",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/signuppage",
      name: "signuppage",
      component: () => import("@/views/SignUpPage.vue"),
    },
  ],
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
