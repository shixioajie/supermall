<template>
  <div id="detail">
    <childComps></childComps>
    <img :src="detailContent.img" alt="">
    <p>{{detailContent.text}}</p>
  </div>
</template>

<script>
  import childComps from './childComps/childComps.vue'

  export default {
    name: "Detail",
    data() {
      return {
        detailContent: null
      }
    },
    components: {
      childComps
    },
    created() {
      // console.log(this.$route.query);
      this.detailContent = this.$route.query
    },
    activated() {
      this.detailContent = this.$route.query
    }
  }
</script>

<style scoped>

</style>
