import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import echarts from 'echarts'
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
// Vue.prototype.$echarts = echarts
router.beforeEach((to,from,next)=>{
  if (!to.query.uuid) {
    let toQuery = JSON.parse(JSON.stringify(to.query));
    if (localStorage.getItem('uuid')) {
      var timestamp = localStorage.getItem('uuid')
    } else if (from.query.uuid) {
      toQuery.uuid = from.query.uuid;
      store.state.uuid = from.query.uuid
      localStorage.setItem('uuid',timestamp)
      next({
        path: to.path,
        query: toQuery
      })
    } else {
      var timestamp = Date.parse(new Date());
      var $chars =
        "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = "";
      let i = 0;
      for (i = 0; i < 12; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      timestamp = pwd + timestamp;
      localStorage.setItem('uuid',timestamp)
    }
    toQuery.uuid = timestamp;
    store.state.uuid = timestamp
    next({
      path: to.path,
      query: toQuery
    })
  } else {
    next()
  }
})
router.afterEach((to, from, next) => {

  window,
  scrollTo(0, 0)

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')