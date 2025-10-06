import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/IndexView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/UserProfileView.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("@/views/CalendarView.vue"),
    },
    {
      path: "/blank",
      name: "blank",
      component: () => import("@/views/BlankPageView.vue"),
    },
    {
      path: "/error-404",
      name: "error-404",
      component: () => import("@/views/Error/FourZeroFourView.vue"),
    },
    {
      path: "/ui/line-chart",
      name: "line-chart",
      component: () => import("@/views/UI-Elements/LineChartView.vue"),
    },
    {
      path: "/ui/bar-chart",
      name: "bar-chart",
      component: () => import("@/views/UI-Elements/BarChartView.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("@/views/Auth/SignInView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/Auth/SignUpView.vue"),
    },
  ],
});

export default router;
