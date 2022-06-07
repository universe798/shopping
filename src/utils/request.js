import axios from 'axios'
import store from '@/store'
import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
// 创建一个新的axios实例
const instance = axios.create({
  baseURL,
  timeout: 5000
})
// 请求拦截器，如果有token进行头部携带
instance.interceptors.request.use(config => {
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  if (err.response && err.response.status === 401) {
    store.commit('user/setUser', {})
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

export default (url, method, submitDate) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'Params' : 'data']: submitDate
  })
}
