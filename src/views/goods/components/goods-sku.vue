<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{item.name}}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
        <img :class="{selected:val.selected,disabled:val.disabled}" @click="changeSku(item,val)" v-if="val.picture" :src="val.picture" :title="val.name">
        <span :class="{selected:val.selected,disabled:val.disabled}" @click="changeSku(item,val)" v-else>{{val.name}}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>
<script>
import powerSet from '@/vender/power-set'
const spliter ='★'
const getPathMap = (skus) => {
  //得到所有sku集合，props.goods.skus
  //从所有sku中筛选有效
  //用有效sku使用power-set得到子集
  //根据子集往路径字典对象中存储key-value

  //设置路径字典对象
   const pathMap = {}
   skus.forEach(sku => {
    if(sku.inventory > 0){
      //可选数组
      const valueArr = sku.specs.map(val=>val.valueName)
      //计算可选子集
      const valueArrPowerSet = powerSet(valueArr)
      //遍历子集,往pathMap插入子集
      valueArrPowerSet.forEach(arr=>{
        //根据arr得到字符串的key
        const key = arr.join(spliter)
        // 给pathMap设置数据
        if (pathMap[key]){
          pathMap[key].push(sku.id)
        }else {
          pathMap[key] = [sku.id]
        }
      })

    }
   })
   return pathMap
}
const getSelectedValues = (specs) => {
  const arr = []
  specs.forEach(item => {
    //选中的按钮对象
    const selectedVal = item.values.find(val => val.selected)
    arr.push(selectedVal ? selectedVal.name : undefined)
  })
  return arr
}
//更新按钮禁用状态
const updateDisabledStatus = (specs, pathMap) => {
   specs.forEach((item,i) => {
    const selectedValues = getSelectedValues(specs)
    item.values.forEach(val => {
      //判断当前是否选中，选中不用判断
      if (val.selected) return
     //拿当前值按照顺序套入选中的值数组
     selectedValues[i] = val.name
     //剔除undefined数据，用分隔符拼接
     const key = selectedValues.filter(value => value).join(spliter)
      //路径字典查找数据，有则可点，没有则禁用
     val.disabled = !pathMap[key]
    })
   })
}
//默认选中
const initDefaultSelected  = (goods,skuId) => {
     //找出sku信息
     //遍历每个按钮，按钮值和sku记录的值相同则选中
     const sku = goods.skus.find(sku => sku.id === skuId)
     goods.specs.forEach((item,i) => {
      const val =  item.values.find(val => val.name === sku.specs[i].valueName) 
      val.selected = true
     })
}

export default {
  name: 'GoodsSku',
  props:{
     goods:{
      type: Object,
      default: ()=>({})
     },
     skuId:{
      type: String,
      default: ''
     }
  },
  setup (props,{emit}) {
     const pathMap = getPathMap(props.goods.skus)
     //根据skuId初始化选中
     if (props.skuId) {
      initDefaultSelected(props.goods,props.skuId)
     }
     //组件初始化更新按钮禁用状态
     updateDisabledStatus(props.goods.specs, pathMap)
    //选中与取消选中
     const changeSku = (item,val) => {
        //当按钮禁用，阻止程序运行
        if(val.disabled) return

        if(val.selected){
          val.selected = false
        }else{
          item.values.forEach(valItem => {
            valItem.selected = false
          })
          val.selected = true
        }
        //点击按钮时：更新按钮禁用状态
       updateDisabledStatus(props.goods.specs, pathMap)
       // 将选择的sku信息通知父组件
       // 选择完整的sku组合按钮，提交父组件
       // 选择不完整，提交空对象给父组件
       const validselectedValues = getSelectedValues(props.goods.specs).filter(v=>v)
       if (validselectedValues.length === props.goods.specs.length) {
           const skuIds = pathMap[validselectedValues.join(spliter)]
           const sku = props.goods.skus.find(sku => sku.id === skuIds[0])
           emit('change',{
            skuId: sku.id,
            price: sku.price,
            oldPrice: sku.oldPrice,
            inventory: sku.inventory,
            //拼接成字符串
            specsText: sku.specs.reduce((p,c)=>`${p}${c.name}:${c.valueName}`,'').trim()
           })
       }else{
         emit('change',{})
       }

      }
  return { changeSku}
  }
}
</script>
<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>