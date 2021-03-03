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

<style>
	.title {
		
		float: left;
		white-space:nowrap;
		width: 500px;
		
		line-height: 50px;
		height: 50px;
	}
	.title p {
		float: left;
		width: 100px;
		font-size: 18px;
		text-align: center;
	}
	.product{
		width: 230px;
		height: 385px;
		float: left;
		border-radius: 10px;
		border: 0.5px solid #F0F0F0;
		margin: 5px 10px 5px 10px;
		
	}
	.productBody img{
		width: 230px;
		height: 270px;
		border-radius: 10px 10px 0 0;
	}
	.productBody p {
		width: 240px;
		line-height: 20px;
		white-space:nowrap;/* 文本不换行 */
		overflow: hidden;
		text-overflow: ellipsis;/* 超出宽度显示为省略号 */
	    margin-top: 15px;
	}
	.productPrice{
		margin-top: 10px;
	}
	.productPrice #zhe{
		width: 140px;
		line-height: 20px;
		text-align: center;
		border: 1px solid deeppink;
		border-radius: 8px;
		color: deeppink;
		margin-bottom: 18px;
	}
	.productPrice span{
		float: left;
		font-weight: bold;
		font-size: 20px;
		color: deeppink;
	}
	.productPrice img{
		width: 25px;
		height: 25px;
		float: left;
	}
	.productPrice p{
		float: right;
		background-color: rgb(255,192,203,0.8);
		color: deeppink;
		width: 70px;
		line-height: 23px;
		text-align: center;
		border-radius: 10px;
	}
</style>
