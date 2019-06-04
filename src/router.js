import Vue from "vue";
import Router from "vue-router";
import MainView from "./views/MainView";
import MenuView from "./views/MenuView";
import ProjectsView from "./views/ProjectsView";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing"
    },
    {
      path: "/main",
      name: "mainPage",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MainView
    },
    {
      path: "/menu",
      name: "menuPage",
      component: MenuView
    },
    {
      path: "/projects",
      mame: "projectsPage",
      component: ProjectsView
    }
  ]
});
