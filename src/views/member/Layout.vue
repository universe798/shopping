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
import home from '../home/index.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavbar, 
    AppHeader,
    AppFooter,
    AppHeaderSticky,
    home
},
//获取下分类数据
setup () {
    const store = useStore()
    store.dispatch('category/getList')
}
}
</script>

<style lang="less" scoped>
  
</style>
