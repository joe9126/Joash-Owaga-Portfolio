import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/styles.css";
import router from "@/routes/index";

const app = createApp(App);
app.use(router);
app.mount("#app");
