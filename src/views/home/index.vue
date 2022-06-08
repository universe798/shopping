<template>
    <div class="container">
      <!-- //首页入口 -->
      <div class="home-entry">
         <HomeCategory />
      </div>
    </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory
  }
}
</script>

<style lang="less" scoped>
.container {
   .hoverShadow();
}
</style>
