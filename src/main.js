import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import router from "./router";
import Particles from "vue2-particles";
import store from "./store";
import "@/utils/element-ui";
Vue.use(Particles);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
