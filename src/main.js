import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import scrollanimation from "./views/home/components/directives/scrollanimation";
import { createPinia, PiniaVuePlugin } from "pinia";
import { markRaw } from "vue";
import VueSessionStorage from "vue-sessionstorage";

Vue.use(VueSessionStorage);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

Vue.config.productionTip = false;
Vue.directive("scrollanimation", scrollanimation);
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }
  // set the current language for i18n.
  i18n.locale = language;
  next();
});

new Vue({
  pinia,
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
