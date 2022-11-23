import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./routers";
import Toast from "vue-toastification";

import "./style.css";
import 'vue-material-design-icons/styles.css';
import "vue-toastification/dist/index.css";
import './plugins'

const toast_options = {
  // You can set your default options here
};


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Toast, toast_options);
app.provide('GROUP', {})

app.mount("#app");


