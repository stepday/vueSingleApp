<template>
	<header class="head">
		<span class="logo">填坑网</span>
		<ul class="menu-box">
			<li class="active" v-on:click="goUrl('home')">主页</li>
			<li v-on:click="goUrl('blog')">那些坑人的事儿</li>
			<li v-on:click="goUrl('daren')">踩坑达人</li>
		</ul>
		<div class="user-box">
			<!--用户登录后显示的-->
			<div v-if="$store.state.isLogin" class="state-yes">
				<em>admin</em>
			</div>
			<!--用户未登录-->
			<div v-else class="state-no">
				<a href="/login">登录</a>
				<a href="/register">注册</a>
			</div>
		</div>
	</header>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			goUrl:function(_path)
			{
				this.$router.push({path:"/"+_path});
			}
		}
	}
</script>
<style lang="scss">
	.head,.footer{
		width: 100%;
		height: 35px;
		line-height: 35px;
		background: #009688;
		color: #fff;
		font-size: 16px;
		text-align: center;
	}
	.head{
		text-align: left;
		height: 60px;
		line-height: 60px;
		.logo{
			font-size: 20px;
			display: inline-block;
			float: left;
			margin-left: 100px;
		}
		.menu-box{
			margin: 0;
			padding: 0;
			float: left;
			width: 800px;
			margin-left: 200px;
			li{
				float: left;
				width: 150px;
				text-align: center;
				cursor: pointer;
				transition:0.5s;
				-o-transition:0.5s;
				-webkit-transition:0.5s;
				-ms-transition:0.5s;
				-moz-transition:0.5s;
			}
			li:hover,li.active{
				background: #FF5722;
				font-size: 14px;
			}
		}
		.user-box{
			float: right;
			margin-right: 50px;
			a{
				color: #fff;
			}
		}
	}
</style>