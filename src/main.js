import Vue from "vue";
import "./plugins/fontawesome";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuelidate from "vuelidate";
import store from "@/store";
import { initialize } from "@/helpers/general";
import "alga-css/dist/alga.min.css";

import "bootstrap";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import style from "@/assets/css/style.css";

Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios, Vuelidate);
Vue.use(CKEditor);
Vue.use(style);

initialize(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
