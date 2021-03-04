
<template>
	<swiper class="swiper-box" :options="swiperOptions">
		<swiper-slide :key='i.id' v-for='(i,index) in imgList'>
			<img class="swiper-img" :src='i.url' alt="">
		</swiper-slide>
		<!-- <swiper-slide> 
			<img src= '@/assets/swiperImg/1.png' alt="">
		</swiper-slide> -->
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	export default {
		name: 'swiperHome',
		data() {
			return {
				swiperOptions: {

					pagination: '.swiper-pagination', //分页器（小圆点）
					loop: true, //让轮播图循环
					autoplay: 3000, //切换速度3000ms
					autoplayDisableOnInteraction: false, //即使操作swiper，图片照样会自动切换
					effect: 'flip',//切换效果
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true //修改swiper的父元素时，自动初始化swiper
				},
				imgList: [{
						id: 1,
						url: require('@/assets/swiperImg/1.png')
					},
					{
						id: 2,
						url: require('@/assets/swiperImg/2.png')
					},
					{
						id: 3,
						url: require('@/assets/swiperImg/3.png')
					},
					{
						id: 4,
						url: require('@/assets/swiperImg/4.png')
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper-box {
		overflow: hidden;
		width: 100%;
	}

	.swiper-img {
		width: 100%;
		height: 19.29rem;
	}
</style>
