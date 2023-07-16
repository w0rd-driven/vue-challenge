import Vue from "vue";
import App from "./App.vue";
import './css/app.css'

Vue.config.productionTip = false;

new Vue({
  el: "#app", // Binds to the #app element in public/index.html; Only works with this ID within codesandbox
  render: h => h(App)
});
