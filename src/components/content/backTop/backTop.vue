<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "backTop",
  }
</script>

<style scoped>
  .backTop {
    position: fixed;
    right: 5px;
    bottom: 60px;
    z-index: 9;
    width: 15vw;
  }

  .backTop > img {
    width: 100%;
  }

</style>
