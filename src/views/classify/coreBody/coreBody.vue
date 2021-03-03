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

<style>
	#coreBody{
		margin: 15px 10px 15px 10px;
	}
	.coreContent{
		margin-left: 20px;
	}
	.coreText{
		float: left;
		margin: 10px 10px 10px 10px;
	}
	.coreText img{
		width: 100px;
		height: 100px;
	}
	.coreText p{
		text-align: center;
	}
</style>
