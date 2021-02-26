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
	width: 500px;
	margin: 0 auto;
}
</style>
