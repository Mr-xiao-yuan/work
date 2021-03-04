<template>
	<div id="coreBody">
		<div class="coreContent">
		<div class="coreText" v-for="(i,index) in $store.state.core[$store.state.num]">
			<img :src="i.img" alt="">
			<p>{{i.text}}</p>
		</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'coreBody',
		data(){
			return{
				
			}
		},
		components:{
			
		}
	}
</script>

<style scoped="scoped">
	#coreBody{
		margin: 1.07rem 0.71rem 1.07rem 0.71rem;
	}
	.coreContent{
		margin-left: 1.43rem;
	}
	.coreText{
		float: left;
		margin: 0.71rem 0.71rem 0.71rem 0.71rem;
	}
	.coreText img{
		width: 7.14rem;
		height: 7.14rem;
	}
	.coreText p{
		text-align: center;
	}
</style>
