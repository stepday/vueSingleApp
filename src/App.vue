<template>
  <div id="app">
    <headercomponent></headercomponent>
    <router-view class="view"></router-view>
    <footercomponent></footercomponent>   
  </div>
</template>

<script>
//引入头部组件
import headercomponent from './component/header.vue';
//引入尾部组件
import footercomponent from './component/footer.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: '欢迎来到填坑网'
    }
  },
  //注册组件
  components:{ 
    headercomponent,
    footercomponent
  }
}
</script>

<style lang="scss">
html,body{ margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  img{
    height: 50px;
    width: 50px;
  }
  h1{
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
