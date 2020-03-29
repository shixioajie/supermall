<template>
  <div id="home">
    <navigation class="home-nav">
      <div slot="center">购物街</div>
    </navigation>
    <swiper :banner="banner"></swiper>
    <recommend :recommend="recommend"></recommend>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
    <list-data :listData="showGoods"></list-data>
  </div>
</template>

<script>
  //子组件
  import Swiper from './childrComponents/homeSwiper'
  import recommend from './childrComponents/Recommend'
  import featureView from './childrComponents/featureView'
  import listData from './childrComponents/homelist.vue'
  //公共组件
  import navigation from 'components/conmmon/navigation.vue'
  import tabControl from 'components/content/tabControl/tabControl'
  // 管理数据
  import {getHomeData, getHomeGoods} from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        banner: null,
        recommend: null,
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
      }
    },
    components: {
      navigation,
      Swiper,
      recommend,
      featureView,
      tabControl,
      listData,
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeData();


      //列表数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {

      //*数据请求处理*//
      getHomeData() {
        getHomeData().then(data => {
          this.banner = data.data.banner.list;
          this.recommend = data.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(data => {
          // console.log(data.data);
          this.goods[type].page += 1;
          this.goods[type].list.push(...data.data)
        }).catch(error => {
          console.log(111);
        })
      },

      //*事件*//
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break
        }
      }
    }
  }
</script>

<style scoped>

  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: #ff8198;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

</style>
