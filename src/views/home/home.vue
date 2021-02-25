<template>
  <div id="home">
	  <navbar class="home-nav"><div slot = 'center'>购物街</div></navbar>
  </div>
</template>

<script>
  import Navbar from '@/components/common/navbar/Navbar'
  import {getHome} from '@/network/home'
	
  export default {
    name: '',
    data() {
      return {
		  //赋值null，是因为要传入对象
		  banners: [],
		  recommends: []
      };
    },

    components: {
		Navbar
	},
	created(){
		getHome().then(res => {
			console.log(res)
			//函数执行完，数据会回收，用ressult保存这个数据
			this.banners =res.data.data.banner
			this.recommends = res.data.data.recommend
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
