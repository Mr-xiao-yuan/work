<template>
	<div class="guessyoulikeit">
		<div class="title">
			<p v-for="i in text">{{i}}</p>
		</div>
		<div class="product" v-for="(i,index) in $store.state.guessYouLikeIt">
			<div class="productBody">
			<img :src="i.img" alt="">
			<p>{{i.title}}</p>
			</div>
			<div class="productPrice">
				<p>￥{{i.Price}}</p>
				<img src="@/assets/img/baoyou.png" alt="">
				<p>销量{{i.salesVolume}}</p>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'guessYouLikeIt',
		data() {
			return {
				text: [
					'热门', '时尚套装', '小个子穿搭', '微胖穿搭', '裙子', '上衣', '裤子'
				]
			}
		},
		computed: {

		},
		methods: {
			
		}
	}
</script>

<style>
	.title {
		display: flex;
		white-space:nowrap;
		width: 730px;
		overflow: hidden;
		/* text-overflow: ellipsis; */
		line-height: 50px;
	}
	.title p {
		flex: 1;
		font-size: 18px;
		text-align: center;
	}
	.product{
		width: 250px;
		height: 300px;
		float: left;
	}
	.productBody img{
		width: 240px;
		height: 270px;
		margin: 0 5px 0 5px;
	}
	/* .productBody p {
		width: 200px;
		height: 36px;
		text-overflow: ellipsis;
	} */
	.productPrice img{
		width: 30px;
		height: 30px;
	}
	
</style>
