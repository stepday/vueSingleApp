<template>
	<div class="home-box">
		<h5>前十大最好看的电影</h5>
		<ul>
			<li v-for="article in articles">
				<img :src="article.images.small">{{article.title}}<span>[{{article.year}}年]</span>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	
	export default {
		data(){
			return {
				articles:[]
			}
		},
		//钩子函数
		mounted:function(){		
			this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
		        headers: {
		 
		        },
		        emulateJSON: true
		    }).then(function(response) {
		       // 这里是处理正确的回调
		        this.articles = response.data.subjects
		        // this.articles = response.data["subjects"] 也可以
		 
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });
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