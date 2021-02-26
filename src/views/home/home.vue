<template>
  <div id="home">
	  <navbar class="home-nav"><div slot = 'center'>购物街</div></navbar>
	  <swiper-home/>
	  <recommend-view :recommends = 'recommends'/>
	  <guess-you-like-it/>
  </div>
</template>

<script>
  import Navbar from '@/components/common/navbar/Navbar'
  import {getHome} from '@/network/home'
  import swiperHome from '@/views/home/HomeNews/swiperHome'
  import recommendView from '@/views/home/HomeNews/recommendView'
  import guessYouLikeIt from '@/views/home/HomeNews/guessYouLikeIt'
  export default {
    name: 'home',
    data() {
      return {
		  banners: [],
		  recommends: [],
      };
    },

    components: {
		Navbar,
		swiperHome,
		recommendView,
		guessYouLikeIt
	},
	created(){
		getHome().then(res => {
			// console.log(res)
			//函数执行完，数据会回收，用ressult保存这个数据
			this.banners =res.data.data.banner
			this.recommends = res.data.data.recommend.list
			
		})
	}
  }
</script>
<style scoped>
  .home-nav{
	  /* 调用开始设置好的css(assets.css.base.css) */
	  background: var(--color-tint);
	  color: white;
  }
</style>
