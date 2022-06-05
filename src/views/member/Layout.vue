<template>
    <AppNavbar />

    <header>头</header>

    <div class="main">
        <RouterView />
    </div>

    <footer>脚</footer>
</template>

<script>
import AppNavbar from '../../components/app-navbar.vue'
export default {
  name: 'Layout',
  components: {
    AppNavbar
}
}
</script>

<style lang="scss" scoped>

</style>
