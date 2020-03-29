<template>
  <div class="tab-bar-itme" @click="itemClick">
    <div v-if="!isBoole">
      <slot name="img">123</slot>
    </div>
    <div v-else :style="active">
      <slot name="img1"></slot>
    </div>
    <div :style="active">
      <slot name="text">456</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabberitme",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'pink',
      }
    },
    data() {
      return {
        // isBoole: true,
        message: "消息"
      }
    },
    computed: {
      isBoole() {
        //当前活跃的对象是否是传

        return this.$route.path.indexOf(this.path) !== -1;
      },
      active() {
        return this.isBoole ? {color: this.activeColor} : {};
      }
    },
    methods: {
      itemClick() {
        if (this.$route.path.indexOf(this.path) !== -1) return;
        this.$router.replace(this.path);
        // this.$router.go(-1);
        // console.log(this.$route.path);
        // console.log(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-itme {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .iconfont {
    display: inline-block;
    margin-top: 1px;
    font-size: 25px;
  }


</style>
