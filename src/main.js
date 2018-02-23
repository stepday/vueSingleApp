import Vue from 'vue'
import App from './App.vue'

//引入ajax的组件
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

import storeConfig from './vuex/store'

//引入路由组件
import router from './router/route'

Vue.use(VueResource);

//使用路由
//路由会创建一个APP实例，并且挂载到选择符 #app 匹配的元素上
const app = new Vue({
  router:router,
  store:storeConfig,
  render: h => h(App)
}).$mount('#app');
