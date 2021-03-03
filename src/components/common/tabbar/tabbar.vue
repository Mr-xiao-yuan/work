<template>
    <div id="tab-bar">
        <slot></slot>
  </div>
</template>

<script>

  export default {
    name:'',
    data () {
      return {

      };
    },

    components: {},
  }

</script>
<style scoped>
#tab-bar {
  display: flex;
  background: #f6f6f6;

  position: fixed;
  height: 50px;
  width: 500px;
  bottom: 0;
  
}

</style>