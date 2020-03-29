<template>
  <div id="recommend">
    <div v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" :alt="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 15px 0 30px;
    border-bottom: 15px solid #eee;
  }

  #recommend > div {
    flex: 1;
  }

  #recommend > div img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
  }
</style>
