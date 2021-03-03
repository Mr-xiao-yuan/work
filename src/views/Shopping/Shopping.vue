<template>
	<div id="Shopping">
		<navbar>
			<div slot='center'>我的购物车</div>
			<div slot='right'>管理</div>
		</navbar>
		<div class="cowry-data"></div>
	</div>
</template>

<script>
	import Navbar from '@/components/common/navbar/Navbar'
	export default {
		name: 'Shopping',
		data() {
			return {};
		},

		components: {
			Navbar
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
