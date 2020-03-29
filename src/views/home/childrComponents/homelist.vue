<template>
  <div class="homelisst">
    <home-list-item v-for="item in listData" :list-data-item="item"></home-list-item>
    <!--    {{listData}}-->
  </div>
</template>

<script>
  import homeListItem from './homeListItem'

  export default {
    name: "homelist",
    props: {
      listData: {
        type: Array,
        default() {
          return ['没有数据']
        }
      }
    },
    components: {
      homeListItem,
    }
  }
</script>

<style scoped>


  .homelisst::after {
    clear: both;
    display: inline-block;
    color: #999999;
    content: "---到底了---";
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 30px;
  }


</style>
