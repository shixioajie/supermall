<template>
  <div class="childComps">
    <navigation>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="~assets/img/back.svg">
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          class="title-item"
          @click="titleIndex(index)"
          :class="{active:index===currentIndex}">
          {{item}}
        </div>
      </div>
    </navigation>
  </div>
</template>

<script>
  import navigation from 'components/conmmon/navigation.vue'

  export default {
    name: "childComps",
    components: {
      navigation,
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleIndex(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 14px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-height-text);
  }

  .back {
    position: relative;
    height: 100%;
  }

  .back > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
