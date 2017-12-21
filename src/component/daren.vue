<template>
	<div class="home-box">
		<h5>踩坑达人</h5>
		<ul>
			<li v-for="user in userlist">
				{{user.name}}<span>[踩坑:{{user.num}}次]</span>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	
	export default {
		data(){
			return {
				userlist:[]
			}
		},
		//钩子函数
		mounted:function(){		
			this.userlist = [{name:"stepday",num:10000},{name:"rmj",num:900}];
		}
	}
</script>
<style lang="scss">
	ul li{ 
		line-height: 60px; 
		text-align: left;
		border-bottom: 1px solid #eee;
		img{ height: 50px;width: 50px;margin-right: 10px; vertical-align: middle;}
		span{ font-size: 12px; color: #333;}
	}
</style>