<template>
	<div id="opTion">
		<img :src='img[indexs]' alt="" @click="isActive">
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

</style>
