<template>
	<div id="cnxh">
		<div class="title">
			<p @click="cnxhc(index)" v-for="(i,index) in text">{{i}}</p>
		</div>
		<div class="product" v-for="(i,index) in $store.state.cnxh[tex]">
			<div class="productBody">
			<img :src="i.img" alt="">
			<p>{{i.title}}</p>
			</div>
			<div class="productPrice">
				<div id="zhe">新人专享满10减3</div>
				<span>￥{{i.Price}}</span>
				<img src="@/assets/icon/baoyou.png" alt="">
				<p>销量{{i.salesVolume}}</p>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cnxh',
		data() {
			return {
				text: [
					'热门', '时尚套装', '裙子', '上衣', '裤子'
				],
				tex:0,
			}
		},
		computed: {

		},
		methods: {
			cnxhc(index){
				this.tex = index;
			}
		}
	}
</script>

<style scoped="scoped">
	.title {
		
		float: left;
		white-space:nowrap;
		width: 35.71rem;
		line-height: 3.57rem;
		height: 3.57rem;
	}
	.title p {
		float: left;
		width: 7.14rem;
		font-size: 1.29rem;
		text-align: center;
	}
	.title p:hover{
		background-color: orange;
		color: white;
	}
	.product{
		width: 16.43rem;
		height: 27.5rem;
		float: left;
		border-radius: 0.71rem;
		border: 0.036rem solid #F0F0F0;
		margin: 0.36rem 0.71rem 0.36rem 0.71rem;
		
	}
	.productBody img{
		width: 16.43rem;
		height: 19.29rem;
		border-radius: 0.71rem 0.71rem 0 0;
	}
	.productBody p {
		width: 16.43rem;
		line-height: 1.43rem;
		white-space:nowrap;/* 文本不换行 */
		overflow: hidden;
		text-overflow: ellipsis;/* 超出宽度显示为省略号 */
	    margin-top: 1.07rem;
	}
	.productPrice{
		margin-top: 0.71rem;
	}
	.productPrice #zhe{
		width: 10rem;
		line-height: 1.43rem;
		text-align: center;
		border: 0.07rem solid deeppink;
		border-radius: 0.57rem;
		color: deeppink;
		margin-bottom: 1.29rem;
	}
	.productPrice span{
		float: left;
		font-weight: bold;
		font-size: 1.43rem;
		color: deeppink;
	}
	.productPrice img{
		width: 1.79rem;
		height: 1.79rem;
		float: left;
	}
	.productPrice p{
		float: right;
		background-color: rgb(255,192,203,0.8);
		color: deeppink;
		width: 5.71rem;
		line-height: 1.64rem;
		text-align: center;
		border-radius: 0.71rem;
	}
</style>
