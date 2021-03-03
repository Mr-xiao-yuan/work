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
<style scoped>
.cowry-data{
	width: 490px;
	background-color: #E0E0E0;
	margin: 10px 5px 10px 5px;
	height: 200px;
	border-radius: 10px;
}
</style>
