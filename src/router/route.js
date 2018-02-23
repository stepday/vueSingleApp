import Vue from 'vue'
//引入路由组
import VueRouter from 'vue-router'
//组件注册
Vue.use(VueRouter);

//定义路由组件
import logincomponent from '../component/login.vue'
import registercomponent from '../component/register.vue'
import homecomponent from '../component/home.vue'
import blogcomponent from '../component/blog.vue'
import darencomponent from '../component/daren.vue'

//创建一个路由实例
//并且配置路由规则
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: "/",
      name: "主页面",
      component: logincomponent
    },
    {
      path: '/login', //登录
      name: "登录",
      component: logincomponent
    },
    {
      path: "/register",
      name: "注册",
      component: registercomponent
    },
    {
      path: "/home",
      name: "用户中心",
      component: homecomponent
    },
    {
      path: "/blog",
      name: "那些坑人的事儿",
      component: blogcomponent
    },
    {
      path: "/daren",
      name: "踩坑达人",
      component: darencomponent
    }
  ]
});
