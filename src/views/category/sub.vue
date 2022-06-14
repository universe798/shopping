<template>
    <div class="sub-catagroy">
    <div class="container">
        <SubBread />
        <SubFilter />
    </div>
    </div>
</template>

<script>
import SubBread from './components/sub-bread.vue';
import SubFilter from './components/sub-filter.vue'
    export default {
    name: "SubCategory",
    components: { SubBread ,SubFilter }
}
</script>

<style lang="scss" scoped>

</style>