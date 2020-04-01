<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles" :class="{active:index === currentIndex}"
         @click="active(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      active(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tabControl {
    display: flex;
    background-color: #ffffff;
  }

  .tabControl > div {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .active {
    color: #FF8198;
  }

  .active span {
    padding: 5px;
    border-bottom: 3px solid #ff8198;
  }

</style>
