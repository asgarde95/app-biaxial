import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "@/assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
