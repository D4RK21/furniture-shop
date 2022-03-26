import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/main.scss";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);

const files = require.context("./", true, /.vue$/i);

files.keys().map(function (key) {
  app.component(key.split("/").pop().split(".")[0], files(key).default);
});

app.use(BootstrapVue);
app.use(IconsPlugin);
app.use(store);
app.use(router);
app.mount("#app");
