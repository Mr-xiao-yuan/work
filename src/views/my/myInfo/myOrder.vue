<template>
	<div id="myOrder">
		<div class="order-title">
			<h2>我的订单</h2>
			<div class="order-title1">
				<img src="@/assets/icon/you.png" alt="">
				<p>查看全部</p>
			</div>
		</div>
		<div class="order-body">
			<div class="order-item" v-for="(i,index) in $store.state.orderIcon">
				<img :src="i.img">
				<p>{{i.text}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myOrder',
		data() {
			return {

			}
		},
		components: {

		}
	}
</script>

<style>
	#myOrder {
		height: 135px;
		font-size: 14px;
	}

	.order-title {
		height: 35px;
		background: #f6f6f6;
	}

	.order-title h2 {
		float: left;
		line-height: 50px;
	}

	.order-title1 {
		float: right;
		white-space: nowrap;
		height: 50px;
	}

	.order-title1 p {
		line-height: 50px;
		float: right;
	}

	.order-title1 img {
		width: 18px;
		height: 18px;
		float: right;
		margin-top: 16px;
	}

	.order-body {
		display: flex;
		background: #f6f6f6;

		position: fixed;
		height: 100px;
		width: 500px;
	}

	.order-item {
		flex: 1;
		text-align: center;
		height: 49px;
	}

	.order-item img {
		width: 48px;
		height: 48px;
		margin: 15px 0 15px 0;
		vertical-align: middle;
	}
</style>
