// 分类模块
import { topCategory } from '@/api/constants.js'
import { findAllCategory } from '@/api/category.js'
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: topCategory.map(item => ({ name: item }))
    }
     },
  mutations: {
    // payLoad是所有的分类集合 
    setList (state, payload){
      state.list = payload
    },
    //定义show和hide函数控制当前分类显示和隐藏
    show (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    hide (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },
  //获取分类函数
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const data = await findAllCategory()
      //给每个分类加上控制二级分类显示隐藏的数据
      data.result.forEach(top => {
        top.open = false
      })
      // 修改分类数据
      commit('setList', data.result)
    }
  }
}
