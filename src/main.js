// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './router/permission'
import ElementUI from 'element-ui';

// 引入样式
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset-ui.css';
import '@/assets/css/style.css';
import '@/assets/css/table.css';
import '@/assets/css/tree.css';
Vue.config.productionTip = false

/* 注册全局对象 */
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
