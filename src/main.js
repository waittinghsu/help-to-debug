import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
// import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
