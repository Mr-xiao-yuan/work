<template>
	<div id="cowryTabbar">
		<op-tion class="icon1"></op-tion>
		<div class="icon2">
			<img class="img1" src="@/assets/icon/shop.png" alt="">
			<h2>壹号人家女装</h2>
			<img class="img2" src="@/assets/icon/you.png" alt="">
		</div>
		<p>领卷</p>
	</div>
</template>

<script>
	import opTion from '@/components/common/option/opTion'
	export default {
		name: 'cowryTabbar',
		data() {
			return {
			    
			}
		},
		components: {
			opTion
		},
	}
</script>

<style>
	#cowryTabbar{
		width: 490px;
		height: 50px;
	}
	.icon1 {
		width: 40px;
		height: 50px;
		float: left;
	}

	.icon1 img {
		width: 30px;
		height: 30px;
		margin: 10px 10px 10px 10px;
	}

	.icon2 {
		width: 390px;
		height: 50px;
		float: left;
	}

	.icon2 .img1 {
		width: 30px;
		height: 30px;
		float: left;
		margin-top: 10px;
	}

	.icon2 h2 {
		line-height: 50px;
		float: left;
	}

	.icon2 .img2 {
		width: 20px;
		height: 20px;
		float: left;
		margin-top: 15px;
	}

	p {
		width: 50px;
		line-height: 50px;
		float: right;
		font-size: 18px;
		text-align: center;
	}
</style>
