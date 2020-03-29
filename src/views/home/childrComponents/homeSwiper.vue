<template>
  <div class="homeSwiper">
    <swiper>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" :alt="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/conmmon/swiper'

  export default {
    name: "homeSwiper",
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
    updated() {
      // console.log(this.banner);
    }
  }
</script>

<style scoped>

</style>
