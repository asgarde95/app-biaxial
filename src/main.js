import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createI18n } from 'vue-i18n'

import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "@/assets/main.css";

const app = createApp(App);
const pinia = createPinia();
const i18n = createI18n();

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount("#app");
