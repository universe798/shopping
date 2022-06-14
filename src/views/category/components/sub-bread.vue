<!-- 二级面包屑 -->
<template>
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :key="category.top.id" v-if="category.top" :to="`/category/${category.top.id}`">{{ category.top.name}}</XtxBreadItem>
    <Transition name="fade-right" mode="out-in">
        <XtxBreadItem :key="category.sub.id" v-if="category.sub">{{category.sub.name}}</XtxBreadItem>
    </Transition>
  </XtxBread>
</template>

<script>
import {useRoute}  from 'vue-router'
import {computed} from 'vue'
import {useStore} from 'vuex'
    export default {
        name:'SubBread',
        setup () {
            const route = useRoute()
            const store = useStore()
            const category = computed(() => {
            const cate = {}
            // 完成获取数据逻辑
            store.state.category.list.forEach(top => {
                if (top.children) {
                const sub = top.children.find(sub => sub.id === route.params.id)
                if (sub) {
                    cate.top = { id: top.id, name: top.name }
                    cate.sub = { id: sub.id, name: sub.name }
                }
                }
            })
            return cate
            })

            return { category }
        }
        }
</script>

<style lang="less" scoped>

</style>