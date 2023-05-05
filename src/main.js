import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import i18n from './i18n'
import { createPinia } from "pinia"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "@/assets/main.css";

const app = createApp(App).use(i18n);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount("#app");
