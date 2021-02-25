<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
		  return {
		  }
		},
		computed: {
			
		}
	}
</script>

<style>
	.nav-bar{
		display: flex;
		height: 45px;
		line-height: 45px;
		text-align: center;
		box-shadow: 1px 1px 5px #888888
	}
	
	.left,
	.right{
		width: 70px;
	}
	.center{
		flex: 1;
		
	}
</style>
