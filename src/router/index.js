import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import RealTimeView from "@/views/RealTimeView.vue";
import OfflineView from "@/views/OfflineView.vue";
import ConsoleView from "@/views/ConsoleView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/realTime",
    name: "RealTime",
    component: RealTimeView,
  },
  {
    path: "/offline",
    name: "Offline",
    component: OfflineView,
  },
  {
    path: "/console",
    name: "Console",
    component: ConsoleView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
