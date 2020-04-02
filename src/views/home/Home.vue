<template>
  <div id="home">
    <!--    上导航栏-->
    <navigation class="home-nav">
      <div slot="center">购物街</div>
    </navigation>
    <!--    吸顶替代效果-->
    <tab-control
      :titles="['流行','新款','精选']"
      ref="tabControl1"
      @tabClick="tabClick"
      class="tabControl"
      v-show="isTabFixed"
    ></tab-control>
    <!--    主体部分-->
    <scroll class="content" ref="toScroll"
            @scrollShow1="scrollShow2"
            :probe-type="3"
            @upload="scrollUpLoad" :pull-up="true"
            @tabbarcontrol="tabbarcontrol">
      <swiper :banner="banner" @swiperImgLoad="swiperImgLoad"></swiper>
      <recommend :recommend="recommend"></recommend>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行','新款','精选']"
        ref="tabControl2"
        @tabClick="tabClick"
      ></tab-control>
      <list-data :listData="showGoods"></list-data>
    </scroll>
    <!--    置顶按钮-->
    <backTop v-show="scrollShow" @click.native="toTop"></backTop>
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
  import backTop from 'components/content/backTop/backTop.vue'
  // 管理数据
  import {getHomeData, getHomeGoods} from 'network/home'
  // better-scroll插件
  import Scroll from 'components/conmmon/better-scroll/better-scroll.vue'
  //防抖节流
  import {debounce} from "common/utils";

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
        scrollShow: false,
        finishPullUp: true,
        tabOffsetTop: 0,
        isTabFixed: false,
        isScrollPosition: 0
      }
    },
    components: {
      navigation,
      Swiper,
      recommend,
      featureView,
      tabControl,
      listData,
      Scroll,
      backTop,
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
    mounted() {
      // 防抖
      const refresh = debounce(this.$refs.toScroll.refresh);

      //监听
      this.$bus.$on('itemImgLoad', () => {
        refresh();
      });
    },
    destroyed() {
      console.log('home destroyed');
    },
    //该组件处于活跃
    activated() {
      this.$refs.toScroll.toTop(0, this.isScrollPosition, 0);
      this.$refs.toScroll.refresh();
    },
    //该组件不处于活跃
    deactivated() {
      this.isScrollPosition = -this.$refs.toScroll.scrollY;
    },
    methods: {
      //*数据请求处理*//
      getHomeData() {
        getHomeData().then(data => {
          this.banner = data.data.banner.list;
          this.recommend = data.data.recommend.list;
        })
      },
      getHomeGoods(type = this.currentType) {
        this.finishPullUp = false;
        setTimeout(() => {
          this.$refs.toScroll.finishPullUp();
          this.finishPullUp = true;
        }, 500);
        console.log(type);
        if (this.goods[type].page >= 2) {
          console.log('没写那个多数据敬请期待');
          return
        }
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(data => {//触发请求来的axios;
          // console.log(data.data);
          this.goods[type].page += 1;
          this.goods[type].list.push(...data.data);

        }).catch(error => {
          console.log('axios请求出现error');
        })
      },

      //*事件 请求数据分类*//
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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      toTop() {
        this.$refs.toScroll.toTop(0, 0)
      },
      scrollShow2(boole) {
        //绝对backTop是否显示
        this.scrollShow = boole;
      },
      tabbarcontrol(n) {//吸顶效果
        this.isTabFixed = n > this.tabOffsetTop;
        // console.log(n > this.tabOffsetTop)
      },
      scrollUpLoad() {//检测到底push数据
        if (this.finishPullUp) {
          this.getHomeGoods();
        }
      },
      // 轮播图图片加载完毕触发
      swiperImgLoad() {
        // 获取需要吸顶效果的dom元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    }
  }
</script>
<!--scoped 作用域会限制重复类名的影响，不会影响其它重复类名的样式-->
<style scoped>

  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: #ff8198;
    color: white;
    /*position: fixed;*/
    /*left: 0;*/
    /*top: 0;*/
    /*z-index: 5;*/
  }


  /*方案一*/
  /*.content {*/
  /*  margin-top: 44px;*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*}*/

  /*方案二*/

  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    top: 44px;
  }

  /*吸顶效果*/
  .tabControl {
    position: relative;
    z-index: 9;
  }
</style>
