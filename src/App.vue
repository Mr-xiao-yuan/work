<template>
  <div id="app">
	  <router-view/>
	  <tabBar/>
  </div>
</template>

<script>
import tabBar from '@/components/content/tabBar'

export default {
  name: 'App',
  components: {
   tabBar
  }
}
</script>

<style>
@import url("./assets/css/base.css");
#app{
	width: 502px;
	float: left;
	padding-bottom: 50px;
	margin-left: 100px;
	font-size: 14px;
	border: 1px solid #F0F0F0;
}
</style>
