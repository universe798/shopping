<template>
    <AppNavbar />
    <AppHeader />
    <AppHeaderSticky />
    <div class="main">
        <RouterView />
    </div>
    <AppFooter />
</template>

<script>
import AppNavbar from '../../components/app-navbar.vue'
import AppHeader from '../../components/app-header.vue'
import AppFooter from '../../components/app-footer.vue'
import AppHeaderSticky from '../../components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavbar, 
    AppHeader,
    AppFooter,
    AppHeaderSticky
},
//获取下分类数据
setup () {
    const store = useStore()
    store.dispatch('category/getList')
}
}
</script>

<style lang="less" scoped>
   .main{
       height: 3000px;
       width:  100%
   }
</style>
