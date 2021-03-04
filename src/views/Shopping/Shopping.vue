<template>
	<div id="Shopping">
		<navbar>
			<div slot='center'>我的购物车</div>
			<div slot='right'>管理</div>
		</navbar>
		<div class="cowry-data">
			<cowry-tabbar></cowry-tabbar>
			<cowry-item></cowry-item>
		</div>
	</div>
</template>

<script>
	import Navbar from '@/components/common/navbar/Navbar'
	import cowryTabbar from '@/views/Shopping/cowry/cowryTabbar'
	import cowryItem from '@/views/Shopping/cowry/cowryItem'
	export default {
		name: 'Shopping',
		data() {
			return {};
		},

		components: {
			Navbar,
			cowryTabbar,
			cowryItem
		},
	}
</script>
<style scoped="scoped">
	#Shopping{
		width: 35.71rem;
		height: 71.43rem;
	}
	.cowry-data {
		width: 35rem;
		background-color: #E0E0E0;
		margin: 0.71rem 0.36rem 0.71rem 0.36rem;
		height: 14.29rem;
		border-radius: 0.71rem;
	}
</style>
