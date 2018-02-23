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
<style type="scss">
	@import '../assets/sass/home.scss';
</style>
<script type="text/javascript" src="../assets/js/home.js"></script>
