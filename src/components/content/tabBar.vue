<template>
  <div>
    <tabbar>
      <tabbaritem path='/home'>
          <img slot="item-icon" src="@/assets/img/home.png" />
          <img slot="item-icon1" src="@/assets/img/home1.png" />
          <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem path='/classification'>
          <img slot="item-icon" src="@/assets/img/classification.png" />
          <img slot="item-icon1" src="@/assets/img/classification1.png" />
          <div slot="item-text">分类</div>
        </tabbaritem>
        <tabbaritem path='/Shopping'>
          <img slot="item-icon" src="@/assets/img/Shopping.png" />
          <img slot="item-icon1" src="@/assets/img/Shopping1.png" />
          <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem path='/my'>
          <img slot="item-icon" src="@/assets/img/my.png" />
          <img slot="item-icon1" src="@/assets/img/my1.png" />
          <div slot="item-text">我的</div>
        </tabbaritem>
    </tabbar>

  </div>
</template>

<script>
  import tabbar from '@/components/common/tabbar/tabbar'
  import tabbaritem from '@/components/common/tabbar/tabbaritem'

  export default {
    name: 'tabBar',
    data() {
      return {
		  
       }
    },
	
    components: {
      tabbar,
      tabbaritem
    },
  }
</script>

<style>

</style>
