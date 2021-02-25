<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path='/home'>
          <img slot="item-icon" src="./../../img/assets/home.png" />
          <img slot="item-icon1" src="./../../img/assets/home1.png" />
          <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem path='/classification'>
          <img slot="item-icon" src="./../../img/assets/classification.png" />
          <img slot="item-icon1" src="./../../img/assets/classification1.png" />
          <div slot="item-text">分类</div>
        </tabbaritem>
        <tabbaritem path='/Shopping'>
          <img slot="item-icon" src="./../../img/assets/Shopping.png" />
          <img slot="item-icon1" src="./../../img/assets/Shopping1.png" />
          <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem path='/my'>
          <img slot="item-icon" src="./../../img/assets/my.png" />
          <img slot="item-icon1" src="./../../img/assets/my1.png" />
          <div slot="item-text">我的</div>
        </tabbaritem>
    </tabbar>

  </div>
</template>

<script>
  import tabbar from './components/tabbar'
  import tabbaritem from './components/tabbaritem'

  export default {
    name: 'App',
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
