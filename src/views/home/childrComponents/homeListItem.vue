<template>
  <div class="homeListItem" @click="itemClick">
    <div class="item">
      <img :src="listDataItem.img" alt="" @load="imgLoad">
      <p>{{listDataItem.text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homeListItem",
    props: {
      listDataItem: {
        type: Object,
        defaults() {
          return {message: '没有数据'}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImgLoad')//事件总线
      },
      itemClick() {
        // this.$router.push('/detail');
        this.$router.push({
          path: '/detail',
          query: {
            img: this.listDataItem.img,
            text: this.listDataItem.text,
          }
        })
      }
    }
  }
</script>

<style scoped>
  .homeListItem {
    width: 50%;
    border: 3px solid #ffffff;
    box-sizing: border-box;
    display: inline-block;
    color: #666666;
  }

  .item > img {
    width: 100%;
    border-radius: 10px;
  }


</style>
