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
		height: 3.57rem;
		line-height: 3.57rem;
		text-align: center;
		box-shadow: 0.07rem 0.07rem 0.71rem #888888;
		background: var(--color-tint);
		color: white;
	}
	
	.left,
	.right{
		width: 5rem;
	}
	.center{
		flex: 1;
	}
	
</style>
