
<!-- 未用该组件，该组件为购物车的选中未选中组件，未找到实现总开关的更好方法，只能用死方法实现了 -->
<template>
	<div id="opTion" @click="isActive">
		<img :src='img[indexs]' alt="" >
	</div>
</template>

<script>
	export default {
		name: 'opTion',
		data() {
			return {
				img: [
					require('../../../assets/icon/weixuan.png'),
					require('../../../assets/icon/yixuan.png')
				],
				indexs: 0
			}
		},
		components: {

		},
		methods: {
			isActive(){
				this.indexs = this.indexs==0?1:0;
			}
		}
	}
</script>

<style>
img{
	width: 2.14rem;
	height: 2.14rem;
}
</style>
