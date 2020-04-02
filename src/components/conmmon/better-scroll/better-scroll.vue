<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "detter-scroll",
    data() {
      return {
        Bscroll: null,
        scrollY: 0
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUp: {
        type: Boolean,
        default: false,
      }
    },
    mounted() {
      this.Bscroll = new BScroll(this.$refs.wrapper, {//使用ref获取唯一的对象。
        probeType: this.probeType,//由父组件传值绝对，滚动监听的程度。
        click: true,
        pullUpLoad: this.pullUp,
      });
      // 监听scroll x y of params
      if (this.probeType === 2 || this.probeType === 3) {
        this.Bscroll.on('scroll', (position) => {
          let n = Math.abs(position.y);
          this.scrollY = n;
          if (n >= 300) {
            this.scrollShow(true);
          } else if (n <= 50) {
            this.scrollShow(false)
          }
          this.tabbarcontrol(n)
        });
      }
      // 到底事件
      if (this.pullUp) {
        this.Bscroll.on('pullingUp', () => {
          setTimeout(() => {
            this.$emit('upload');
          }, 200);

        })
      }
    },
    methods: {
      toTop(x, y, time = 350) {
        this.Bscroll && this.Bscroll.scrollTo(x, y, time);//scrollTo 方法可以设置包含范围内的scroll位置。
      },
      scrollShow(boole) {// 置顶按钮的的显示与否。
        this.Bscroll && this.$emit('scrollShow1', boole)
      },
      tabbarcontrol(n) {
        this.Bscroll && this.$emit("tabbarcontrol", n);
      },
      refresh() {//解决滑动bug
        this.Bscroll && this.Bscroll.refresh();
      },
      finishPullUp() {
        this.Bscroll && this.Bscroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>

</style>
