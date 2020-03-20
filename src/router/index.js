import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../components/login.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("../components/signUp.vue")
  },
  {
    path: "/authen",
    name: "home",
    component: () =>
      import("../views/home.vue")
  },
  {
    path: "/success",
    name: "success",
    component: () =>
      import("../views/success.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
