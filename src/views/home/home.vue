<template>
  <div id="home">
	  <navbar><div slot = 'center'>购物街</div></navbar>
	  <swiper-home/>
	  <tjcp :recommends = 'recommends'/>
	  <cnxh/>
  </div>
</template>

<script>
  import Navbar from '@/components/common/navbar/Navbar'
  import {getHome} from '@/network/home'
  import swiperHome from '@/views/home/HomeNews/swiperHome'
  import tjcp from '@/views/home/HomeNews/tjcp'
  import cnxh from '@/views/home/HomeNews/cnxh'
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
		tjcp,
		cnxh
	},
	created(){
		getHome().then(res => {
			// console.log(res)
			//函数执行完，数据会回收，用ressult保存这个数据
			this.banners =res.data.data.banner
			this.recommends = res.data.data.recommend.list
			
		})
	},
  }
</script>
<style scoped="scoped">
 
</style>
