import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import RealTimeView from "@/views/RealTimeView.vue";
import OfflineView from "@/views/OfflineView.vue";
import ConsoleView from "@/views/ConsoleView.vue";
import ConfigurationView from "@/views/ConfigurationView.vue";
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
    path: "/configuration",
    name: "Configuration",
    component: ConfigurationView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
