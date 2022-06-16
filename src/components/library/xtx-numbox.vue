<template>
  <div class="xtx-numbox">
    <div class="label" v-if="lable">数量</div>
    <div class="numbox">
      <a @click="changeNum(-1)" href="javascript:;">-</a>
      <input type="text" readonly :value="modelValue">
      <a  @click="changeNum(1)" href="javascript:;">+</a>
    </div>
  </div>
</template>
<script>
import { useVModel } from '@vueuse/core'
export default {
  name: 'XtxNumbox',
  props:{
    lable:{
        type: String,
        default:''
    },
    modelValue:{
        type: Number,
        default: 1
    },
    min:{
        type: Number,
        default: 1
    },
    max: {
        type: Number,
        default:10
    }
  },
  setup (props,{emit}) {
    //双向绑定
    const count = useVModel(props,'modelValue',emit)
    // -按钮， +按钮
    const changeNum = (step) => {
       const newValue = count.value + step
       if (newValue < props.min || newValue> props.max ) return
       count.value = newValue
       emit('change',newValue)
    }
    return {changeNum}
  }
  
}
</script>
<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right:1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left:1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>