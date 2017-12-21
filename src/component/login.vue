<template>
	<div class="login-box">
		<div class="row">
			<span>用户名：</span><input class="input" type="text" v-model="uname" autocomplete="false" placeholder="请输入用户名">
		</div>
		<div class="row">
			<span>密码：</span><input class="input" type="password" v-model="pwd" autocomplete="false" placeholder="请输入密码">
		</div>
		<div class="row">
			<button class="btn btn-login" v-on:click="login"><i>登录</i></button>
		</div>
		<div class="row">
			没有账号? 可立即<a href="/register">注册</a>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				uname:"",
				pwd:""
			}
		},
		methods:{
			login:function(){				
				if(this.uname.length == 0)
				{
					alert("请输入用户名");
					return;
				}
				if(this.pwd.length == 0)
				{
					alert("请输入密码");
					return;
				}
				this.$store.commit('setName',true);
				//设置cookies 标记登录成功
				//Common.Tools.Cookies.set("name",escape(this.uname));
				//进入主页面
				this.$router.push({path:"/home"});
			}
		}
	}
</script>
<style lang="scss">
	.login-box{
		width: 600px;
		margin: 100px auto;
	}
	.row{
		line-height: 45px;
		height: 45px;
		span{
			display: inline-block;
			width: 80px;
			text-align: right;
			margin-right: 15px;
			font-size: 14px;
		}
		.input{
			width: 200px;
			height: 30px;
			border-radius: 4px;
			border:1px solid #333;
			padding-left: 5px;
		}
		.btn-login{
			margin-left: 50px;
		}				
	}
</style>