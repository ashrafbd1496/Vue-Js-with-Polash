// main.js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store"; // Import your Vuex store

createApp(App)
  .use(store) // Use the store
  .mount("#app");
