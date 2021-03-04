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

<style scoped="scoped">
@import url("./assets/css/base.css");
#app{
	width: 35.86rem;
	float: left;
	padding-bottom: 3.57rem;
	margin-left: 7.14rem;
	font-size: 1rem;
	border: 0.07rem solid #F0F0F0;
}
</style>
