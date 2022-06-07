//定义分类相关的API接口函数
import request from '@/utils/request.js'

export const findAllCategory = () => {
    return request ('/home/category/head','get')
}