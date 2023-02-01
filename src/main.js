import Vue from "vue";
import App from "./App.vue";

// import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import scrollanimation from "./views/home/components/directives/scrollanimation";
import { createPinia, PiniaVuePlugin } from "pinia";
import { markRaw } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import alert from "@/plugins/alert";
import loading from "@/plugins/loading";
import PluginHelper from "@/helpers/PluginHelper";
import utils from "@/plugins/utils";
import dialog from "@/plugins/dialog";
import { rules } from "@/plugins/rules";
import moment from "moment";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
pinia.use(piniaPluginPersistedstate);

Vue.config.productionTip = false;
Vue.directive("scrollanimation", scrollanimation);
Vue.use(
  PluginHelper.create({
    $utils: utils,
    $rules: rules,
    $dialog: dialog,
    $alert: alert,
    $loading: loading,
    $baseUrl: process.env.VUE_APP_API_ENDPOINT,
    $moment: moment,
  })
);

new Vue({
  pinia,
  router,
  // store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
