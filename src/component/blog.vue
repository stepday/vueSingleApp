<template>
	<div class="home-box">
		<h5>那些坑人的人和事</h5>
		<ul>
			<li v-for="topic in topiclist">
				<a :href="topic.url">{{topic.title}}</a><span class="date">{{topic.date}}</span>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	
	export default {
		data(){
			return {
				topiclist:[]
			}
		},
		//钩子函数
		mounted:function(){		
			this.topiclist = [
				{
					title:"Vue2.0 新手入门 — 从环境搭建到发布",
					url:"http://www.runoob.com/w3cnote/vue2-start-coding.html",
					date:"2017-12-12"
				},
				{
					title:"stepday自主创业，寻求大牛加盟",
					url:"#",
					date:"2017-12-16"
				},
				{
					title:"今天全国楼市价格急速下降，每个人都能够买得起房了",
					url:"#",
					date:"2017-12-18"
				}
			];
		}
	}
</script>
<style lang="scss">
	ul li{ 
		line-height: 60px; 
		text-align: left;
		border-bottom: 1px solid #eee;
		img{ height: 50px;width: 50px;margin-right: 10px; vertical-align: middle;}
		span{ font-size: 12px; color: #333; float: right;margin-right: 15px;}
	}
</style>