import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
const PageError = () => import("@/views/500/PageError.vue");
const NotFound = () => import("@/views/404/NotFound.vue");
import Player from "@/views/player";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/player",
    name: "player",
    component: Player,
  },
];

const pageRoutes = [
  {
    path: "/error",
    name: "500",
    component: PageError,
  },
  {
    path: "/*",
    name: "404",
    component: NotFound,
  },
];
routes.push(...pageRoutes);

const router = new VueRouter({
  routes,
});

const authUrl = [];
router.beforeEach((to, from, next) => {
  if (!authUrl.includes(to.path)) {
    next();
    return;
  }
  // 检查放行
});

export default router;
