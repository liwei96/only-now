import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import echarts from 'echarts'
import {
  NoticeBar,
  Picker,
  Popup,
  Toast 
} from 'vant';

Vue.use(NoticeBar);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Toast);

import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
router.afterEach((to, from, next) => {

  window,
  scrollTo(0, 0)

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')