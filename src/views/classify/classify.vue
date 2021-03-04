<template>
	<div id="classify">
		<navbar><div slot='center'>商品分类</div></navbar>
		<div class="name">
			<ul>
				<li class="namebox" v-for='(i,index) in libox' @click="classifyc(index)">{{i}}<p> > </p></li>
			</ul>
		</div>
		<core-body class="core"></core-body>
		
	</div>
</template>

<script>
	import Navbar from '@/components/common/navbar/Navbar'
	import coreBody from '@/views/classify/coreBody/coreBody'
	export default {
		name: 'classify',
		data() {
			return {
				libox: [
					'美妆','女装','母婴','珠宝饰品','零食','图书','鲜花','手机','厨具','家电','医药','家具','建材','文具','手机','电脑','玩具', 	 	
				],
				
			};
		},

		components: {
			Navbar,
			coreBody
		},
		methods: {
			classifyc(index){
				this.$store.state.num = index
			}
		}
	}
</script>
<style scoped="scoped">
	.classify{
		width: 35.71rem;
	}
	.name {
		width: 7.14rem;
		background: #d0d0d0;
		float: left;
	}
	.namebox{
		text-align: center;
		list-style: none;
		line-height: 4.28rem;
	}
	.namebox:hover{
		background-color: orange;
		color: white;
	}
	.namebox p{
		float: right;
		font-size: 1.43rem;
		opacity: 0.5;
	}
	.core{
		width: 27.14rem;
		float: left;
	}
</style>
