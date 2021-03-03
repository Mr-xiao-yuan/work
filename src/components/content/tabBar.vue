<template>
  <div>
    <tabbar>
      <tabbaritem path='/home'>
          <img slot="item-icon" src="@/assets/icon/home.png" />
          <img slot="item-icon1" src="@/assets/icon/home1.png" />
          <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem path='/classify'>
          <img slot="item-icon" src="@/assets/icon/classify.png" />
          <img slot="item-icon1" src="@/assets/icon/classify1.png" />
          <div slot="item-text">分类</div>
        </tabbaritem>
        <tabbaritem path='/Shopping'>
          <img slot="item-icon" src="@/assets/icon/Shopping.png" />
          <img slot="item-icon1" src="@/assets/icon/Shopping1.png" />
          <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem path='/my'>
          <img slot="item-icon" src="@/assets/icon/my.png" />
          <img slot="item-icon1" src="@/assets/icon/my1.png" />
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
