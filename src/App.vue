<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff5777">
        <i class="iconfont icon-shujia" slot="img"></i>
        <i class="iconfont icon-shujia" slot="img1"></i>
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#ff5777">
        <i class="iconfont icon-qicheqianlian-" slot="img"></i>
        <i class="iconfont icon-qicheqianlian-" slot="img1"></i>
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff5777">
        <i class="iconfont icon-sousuo_huaban" slot="img"></i>
        <i class="iconfont icon-sousuo_huaban" slot="img1"></i>
        <div slot="text">查看</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff5777">
        <i class="iconfont icon-wode" slot="img"></i>
        <i class="iconfont icon-wode" slot="img1"></i>
        <div slot="text">个人</div>
      </tab-bar-item>
      <!--      <tab-bar-item>-->
      <!--        <i class="iconfont icon-wode" slot="img"></i>-->
      <!--        <div slot="text">个人</div>-->
      <!--      </tab-bar-item>-->
    </tab-bar>
  </div>
</template>

<script>
  import tabBar from './components/conmmon/tabbar.vue'
  import tabBarItem from './components/content/tabberitme.vue'

  export default {
    name: 'App',
    components: {
      tabBar,
      tabBarItem,
    },
    mounted() {
      // console.log(this.$children)
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
