import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import store from './store'

import { createPinia } from "pinia";

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import "@/assets/main.css";

const app = createApp(App);
const pinia = createPinia();

// app.use(BootstrapVue)
// app.use(IconsPlugin)

app.use(pinia);
app.use(router);

app.mount("#app");
