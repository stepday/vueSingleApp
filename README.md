# 单页面应用

详细介绍如何采用vue-cli脚手架构建单页面应用实例，技术栈为:webpack+vue+vuex+vue-router+vue-resource+sass+ES6(Promise/async/wait/箭头函数等)

> 基本操作

## 工程运行步骤

``` bash
# 工程安装
npm install

# 运行工程 并实时自动更新到 localhost:8080
npm run dev

# 编译工程
npm run build
```

> 工程目录结构

```
  |- static 静态资源文件夹
     |-js 全局js文件
     |-css 全局css文件
  |- src 开发目录
     |-assets 资源目录（图片、组件对应的css)
       |-sass css文件
     |-component vue组件
       |- public 公共组件
     |-vuex vue状态管理
     |- App.vue 主文件
     |- main.js 脚本入口文件
   |- dist 编译后的文件
   |- index.html 主页面
   |- webpack.config.js 配置文件
   |- package.json 插件配置文件

```

> 开发规范
```
* 1、做功能模块前先熟悉原型图且提前与后台开发人员进行原型图接口的预演和难点分析；

* 2、工具类的公用js务必写到static/js/renrun.tools.js文件内；

* 3、公用的css务必写到static/css/base.css文件内;

* 4、公用组件存放在src/component/public/ 下面，其他组件存放在src/component/下面，另外组件相关的css和js文件对应存放在src/assets/js/sass下面；

* 5、命名规范
     类的定义也就是对象的命名规范：驼峰命名规则(首字母大写)，比如：用户管理（UserManager)
		      非参数变量命名规范：首字母务必小写 后面不同含义的首字母大写，行如：总金额(sumAccount)
		        参数变量命名规范：务必下划线开头后字母小写随后不同含义的首字母大写，行如：总金额(_sumAccount),函数传递内形式为：
		                        getMoney(_sumAccount)

* 6、函数注释规范(注释越多越好 没关系)
     函数注释是让别人快速了解你代码的利器,函数注释如下所示：
		/**
	    * 重新表格数据 支持参数传递
	    * @params _target:string 容器ID
	    * @params _queryParams:object 查询过滤参数
	    */
	    search:function(_target,_queryParams){
	        $('#'+_target).treegrid('load',_queryParams);
	    },
	    /**
	    * 加载数据
	    * @params _target:string 容器ID
	    * @params _data:list 层级关系数据
	    */
	    loadData:function(_target,_data){
	        $('#'+_target).treegrid('loadData',_data);
	    }

* 7、调试日志统一入口在static/js/renrun.tools.js 里面的Console 对象内，最好重要的地方都要加上这个日志便于快速知道问题所在
     调用示例：
	 Common.Tools.Console.error("错误了");
	 Common.Tools.Console.log("日志信息");

```

