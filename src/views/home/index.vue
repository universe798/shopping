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
   <HomeProduct />
   <HomeSpecial />
</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'

export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  
}
}
</script>

<style lang="less" scoped>

</style>
