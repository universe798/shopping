import request  from "@/utils/request.js";
export const findBrand = (limit = 6) => {
   return request('/home/brand','get',{limit})
}