<template>
	<div id="cowryItem">
		<div class="icon" @click="isActive">
			<img :src='img[$store.state.indexs]' alt="" >
		</div>
		<div class="cowryData">
			<img src="https://s5.mogucdn.com/mlcdn/776a41/210303_2348bi7ac066k5icj9eb3aigg95a2_750x1000.png_750x1000.v1cAC.81.jpg"
			 alt="">
			<div class="cowryDataText">
				<h2>夏新款网红小个子一字肩牛仔连衣裙法式名媛减龄镂空拼接裙子女装</h2>
				<p>满99减5</p>
				<h3>￥98</h3>
				<div class="number">
					<table>
						<tr>
							<td id="left" @click="jian">-</td>
							<td id="center">{{num}}</td>
							<td id="right" @click="jia">+</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cowryItem',
		data() {
			return {
				img: [
					require('../../../assets/icon/weixuan.png'),
					require('../../../assets/icon/yixuan.png')
				],
				num: 1
			}
		},
		components: {
			
		},
		methods: {
			isActive(){
				this.$store.state.indexs = this.$store.state.indexs==0?1:0;
			},
			jian(){
				if(this.num != 1){
					this.num--
				}
			},
			jia(){
				if(this.num != 99){
					this.num++
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#cowryItem {
		width: 35rem;
		height: 10.71rem;
	}

	.icon {
		margin: 3.575rem 0.36rem 3.575rem 0.36rem;
		float: left;
		left: 0;
	}
	
	.icon img{
		width: 2.14rem;
		height: 2.14rem;
	}
	
	.cowryData img {
		width: 10rem;
		height: 9.29rem;
		float: left;
		border-radius: 0.57rem;
	}

	.cowryDataText {
		float: left;
		width: 22.14rem;
		height: 9.29rem;
		position: relative;
	}

	.cowryDataText h2 {
		overflow: hidden;
		text-overflow: clip;
		white-space: nowrap;
		margin: 0 1.64rem 0 1.07rem;
		width: 19.43rem;
		height: 1.43rem;
		font-size: 1.21rem;
	}

	.cowryDataText p {
		width: 10rem;
		line-height: 1.43rem;
		text-align: center;
		border: 0.07rem solid deeppink;
		border-radius: 0.57rem;
		color: deeppink;
		float: left;
		margin: 1.43rem 0 0 1.07rem;
		font-size: 1.14rem;
	}

	.cowryDataText h3 {
		color: deeppink;
		bottom: 0;
		position: absolute;
		line-height: 1.43rem;
		font-size: 1.43rem;
		margin-left: 1.07rem;
	}
	.number{
		bottom: -0.57rem;
		position: absolute;
		right: 0.71rem;
		font-size: 1.29rem;
	}
	.number #left,#right{
		width: 2.14rem;
		height: 2.14rem;
		text-align: center;
	}
	.number #center{
		width: 2.86rem;
		height: 2.14rem;
		text-align: center;
	}
</style>
