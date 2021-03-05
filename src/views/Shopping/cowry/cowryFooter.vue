<template>
	<div id="cowryFooter">
		<div class="footer-icon" @click="isActive">
			<img :src='img[$store.state.indexs2]' alt="" >
		</div>
		<div class="left"><p>全选</p></div>
		<div class="right">
			<button>结算</button>
			<p>￥0</p>
			<h2>合计：</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cowryFooter',
		data(){
			return{
				img: [
					require('../../../assets/icon/weixuan.png'),
					require('../../../assets/icon/yixuan.png')
				],
				indexs: 0,
			}
		},
		components:{
			
		},
		methods: {
			isActive(){
				this.$store.state.indexs2 = this.$store.state.indexs2==0?1:0;
				this.$store.state.indexs = this.$store.state.indexs2;
				this.$store.state.indexs1 = this.$store.state.indexs2;
			}
		}
	}
</script>

<style>
	.footer-icon{
		width: 2.86rem;
		height: 3.57rem;
		padding: 0.71rem 0 0 0.36rem;
		float: left;
	}
	.footer-icon img{
		width: 2.14rem;
		height: 2.14rem;
	}
	.left p{
		color: #888888;
		width: 2.14rem;
		line-height: 3.57rem;
		float: left;
		text-align: center;
	}
	.right{
		float: right;
		width: 13.57rem;
		height: 3.57rem;
	}
	.right h2{
		font-size: 1.14rem;
		width: 4.29rem;
		line-height: 3.57rem;
		float: right;
		text-align: right;
	}
	.right p{
		width: 2.14rem;
		line-height: 3.57rem;
		float: right;
		color: #ff6633;
		font-size: 1.14rem;
	}
	.right button{
		width: 7.14rem;
		height: 3.57rem;
		float: right;
		border-radius: 50px;
		border: none;
		background-color: orange;
		color: white;
		outline:none;
	}
</style>
