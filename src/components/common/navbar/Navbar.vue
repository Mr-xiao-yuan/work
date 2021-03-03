<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
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
		height: 50px;
		line-height: 50px;
		text-align: center;
		box-shadow: 1px 1px 10px #888888;
		background: var(--color-tint);
		color: white;
	}
	
	.left,
	.right{
		width: 70px;
	}
	.center{
		flex: 1;
	}
	
</style>
