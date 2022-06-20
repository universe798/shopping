//提供商品相关的api函数
import request  from "@/utils/request";
/* 获取商品详情 */
export const findGoods = (id) => {
 return request ('/goods','get' ,{id})
}

/* 获取相关推荐商品   商品id，传入相关推荐，不传猜你喜欢 */
export const findRelevantGoods = ({id, limit =16}) => {
   return request('/goods/relevant','get',{id,limit})
}

/* 获取热销榜数据 ， 商品id ，商品数量 ，热销类型 */
export const findGoodsHot = ({id,limit=3,type = 1}) => {
   return request('/goods/hot','get',{ id, limit, type })
}

/* 查询商品评价 */
export const findGoodsCommentInfo = (id) => {
   return request('https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate','get')
}

/* 查询商品评价列表 */
export const findGoodsCommentList = (id,params) => {
   return request('https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate/page','get',params)
}