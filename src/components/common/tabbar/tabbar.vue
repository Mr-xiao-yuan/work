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
  left: 0;
  right: 0;
  
  width: 500px;
  margin: 0 auto;
  bottom: 0;
}

</style>