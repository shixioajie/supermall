<template>
  <div class="homeSwiper">
    <swiper>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" :alt="item.image" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/conmmon/swiper'

  export default {
    name: "homeSwiper",
    data() {
      return {
        isLoad: false,
      }
    },
    props: {
      banner: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      Swiper, SwiperItem
    },
    methods: {
      imgLoad() {
        if (!this.isLoad) {
          this.$emit('swiperImgLoad');
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
