import request  from "@/utils/request.js";
/* return promise  获取品牌 */
export const findBrand = (limit = 6) => {
   return request('/home/brand', 'get', { limit })
 }
 
/* return promise 获取广告区轮播图 */
export const findBanner = () => {
   return request('/home/banner','get')
}

/* return promise 获取新鲜好物 */
export const findNew = () => {
   return request('/home/new','get')
}

/* return promise 获取人气推荐 */
export const findHot = () => {
   return request('/home/hot','get')
}

/* return promise 获取产品 */
export const findGoods = () => {
   return request('/home/goods','get')
}

/* return promise 获取产品 */
export const findSpecial = () => {
   return request('/home/special','get')
}