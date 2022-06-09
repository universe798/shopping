<template>
    <div class="home-entry">
      <div class="container">
        <!-- //首页入口 -->
         <HomeCategory />
         <HomeBanner />
      </div>
    </div>
   <HomeNew />
   <HomeHot />
   <HomeBrand />
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
   HomeBrand
  
}
}
</script>

<style lang="less" scoped>

</style>
