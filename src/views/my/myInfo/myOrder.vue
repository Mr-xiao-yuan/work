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

<style scoped="scoped"> 
	#myOrder {
		height: 9.64rem;
		font-size: 1rem;
	}

	.order-title {
		height: 2.5rem;
		background: #f6f6f6;
	}

	.order-title h2 {
		float: left;
		line-height: 3.57rem;
	}

	.order-title1 {
		float: right;
		white-space: nowrap;
		height: 3.57rem;
	}

	.order-title1 p {
		line-height: 3.57rem;
		float: right;
	}

	.order-title1 img {
		width: 1.29rem;
		height: 1.29rem;
		float: right;
		margin-top: 1.14rem;
	}

	.order-body {
		display: flex;
		background: #f6f6f6;
		position: absolute;
		height: 7.14rem;
		width: 35.71rem;
	}

	.order-item {
		flex: 1;
		text-align: center;
		height: 3.5rem;
		white-space:nowrap;
	}

	.order-item img {
		width: 3.43rem;
		height: 3.43rem;
		margin: 1.07rem 0 1.07rem 0;
	}
</style>
