<template>
	<div id="cowryTabbar">
		<div class="icon1" @click="isActive">
			<img :src='img[$store.state.indexs1]' alt="" >
		</div>
		<div class="icon2">
			<img class="img1" src="@/assets/icon/shop.png" alt="">
			<h2>YiYi衣可秀</h2>
			<img class="img2" src="@/assets/icon/you.png" alt="">
		</div>
		<p>领卷</p>
	</div>
</template>

<script>
	export default {
		name: 'cowryTabbar',
		data() {
			return {
				img: [
					require('../../../assets/icon/weixuan.png'),
					require('../../../assets/icon/yixuan.png')
				]
			}
		},
		components: {
			
		},
		methods: {
			isActive(){
				this.$store.state.indexs1 = this.$store.state.indexs1==0?1:0;
				this.$store.state.indexs = this.$store.state.indexs1;
			}
		}
	}
</script>

<style scoped="scoped">
	#cowryTabbar{
		width: 35rem;
		height: 3.57rem;
	}
	.icon1 {
		width: 2.86rem;
		height: 3.57rem;
		padding: 0.71rem 0 0 0.36rem;
		float: left;
	}
	.icon1 img{
		width: 2.14rem;
		height: 2.14rem;
	}
	.icon2 {
		width: 27.86rem;
		height: 3.57rem;
		float: left;
	}

	.icon2 .img1 {
		width: 2.14rem;
		height: 2.14rem;
		float: left;
		margin-top: 0.71rem;
	}

	.icon2 h2 {
		line-height: 3.57rem;
		float: left;
	}

	.icon2 .img2 {
		width: 1.43rem;
		height: 1.43rem;
		float: left;
		margin-top: 1.07rem;
	}

	p {
		width: 3.57rem;
		line-height: 3.57rem;
		float: right;
		font-size: 1.29rem;
		text-align: center;
	}
</style>
