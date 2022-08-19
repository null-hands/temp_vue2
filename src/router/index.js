import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@views/home/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/canvas",
    name: "Canvas",
    component: () => import(/* webpackChunkName: "canvas" */ "@views/canvas/Canvas.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "@views/request/user.vue")
  },
  {
    path: "/cssBase",
    name: "CssBase",
    component: () => import(/* webpackChunkName: "cssbase" */ "@views/css/CssBase.vue")
  },
  {
    path: "/form",
    name: "Form",
    component: () => import(/* webpackChunkName: "Form" */ "@views/element-ui/form.vue")
  },
  {
    path: "/table",
    name: "Table",
    component: () => import(/* webpackChunkName: "Table" */ "@views/element-ui/table.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
