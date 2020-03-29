<template>
  <div class="homeListItem">
    <div class="item">
      <img :src="listDataItem.img" alt="">
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
