import { createApp } from "vue";
import App from "./App";
import { router } from "./router";
import * as ElementUI from "element3";
import "element3/lib/theme-chalk/index.css";

const app = createApp(App);

app.use(router);
app.use(ElementUI);

app.mount("#app");
