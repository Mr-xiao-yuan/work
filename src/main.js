import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
	
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
