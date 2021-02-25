<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon1"></slot>
    </div>
    <!-- 判断该组件是否处于活跃状态，true则颜色是this。activeColor，flase则空 -->
    <div :style="isActive ? {color: this.activeColor}:{}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbaritem',
    props: {
      path: String,
      activeColor: {
        type: String,
        // 如果没有设置颜色,默认pink
        default: 'pink'
      }
    },
    data() {
      return {
        // isActive: true
      };
    },
    computed: {
      //判断活跃的组件是否等于他自己
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => {})
      }
    },
    components: {},
  }
</script>
<style scoped>
  #tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  #tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .active {
    color: red;
  }
</style>
