<template>
    <AppNavbar />

    <AppHeader />

    <div class="main">
        <RouterView />
    </div>
    
    <AppFooter />
</template>

<script>
import AppNavbar from '../../components/app-navbar.vue'
import AppHeader from '../../components/app-header.vue'
import AppFooter from '../../components/app-footer.vue'
export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter
}
}
</script>

<style lang="scss" scoped>

</style>
