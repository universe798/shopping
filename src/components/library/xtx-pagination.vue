<template>
  <div class="xtx-pagination">
    <a @click="changePager(myCurrentPage-1)" v-if="myCurrentPage>1" href="javascript:;">上一页</a>
    <a v-else href="javascript:;" class="disabled">上一页</a>
    <span v-if="pager.start>1">...</span>
    <a @click="changePager(i)" href="javascript:;" v-for="i in pager.btnArr" :key="i" :class="{active:i===myCurrentPage}">{{i}}</a>
    <span v-if="pager.end<pager.pageCount">...</span>
    <a @click="changePager(myCurrentPage+1)" v-if="myCurrentPage<pager.pageCount" href="javascript:;">下一页</a>
    <a v-else href="javascript:;" class="disabled">下一页</a>
  </div>
</template>
<script>
import { watch} from 'vue'
import { ref,computed } from 'vue'
export default {
  name: 'XtxPagination',
  props:{
    total:{
      type:Number,
      default:100
    },
    pageSize:{
      type:Number,
      default:10
    },
    currentPage:{
      type:Number,
      default:1
    }
  },
   setup (props, { emit }) {
    //按钮数
    const count  = 5
    //当前页码
    const myCurrentPage = ref(1)
    const myTotal = ref(100)
    const myPageSize = ref(10)
    //其他数据
    const pager = computed(()=>{
      const pageCount = Math.ceil(myTotal.value / myPageSize.value)
      const offset = Math.floor(count / 2)
      let start = myCurrentPage.value - offset
      let end = start + count - 1 
      // 起始页小于0
      if (start < 1){
         start = 1
         end = (start + count -1)>pageCount ? pageCount :(start + count - 1)
      }
      //结束页码大于总页数
      if(end > pageCount){
        end = pageCount
        start = (end - count + 1)<1 ? 1:(end - count +1)
      }
      const btnArr = []
      for (let i =start;i<=end;i++){
        btnArr.push(i)
      }
      return {
        pageCount,
        btnArr,
        start,
        end
      }
    })
     // 切换分页函数
    const changePager = (page) => {
      // 页码相同不作为
      if (myCurrentPage.value !== page) {
        myCurrentPage.value = page
        // 通知父组件
        emit('current-change', page)
      }
    }
    watch(props, () => {
      myTotal.value = props.total
      myPageSize.value = props.pageSize
      myCurrentPage.value = props.currentPage
    }, { immediate: true })
     return { myCurrentPage, pager, changePager }
  }
} 
</script>
<style scoped lang="less">
.xtx-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
  > a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    &:hover {
      color: @xtxColor;
    }
    &.active {
      background: @xtxColor;
      color: #fff;
      border-color: @xtxColor;
    }
    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        color: #333
      }
    }
  }
  > span {
    margin-right: 10px;
  }
}
</style>