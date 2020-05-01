// 引入axios
import axios from 'axios'
import Vue from 'vue'
import { Notify } from 'vant'

Vue.use(Notify)
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://106.52.239.202/' : 'http://localhost:3000',
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  Notify('网络出问题了')
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  if (response.data.code !== 0) {
    Notify(response.data.msg)
    return Promise.reject(response.data)
  }
  Notify({ type: 'success', message: response.data.msg })
  return response.data
}, (error) => {
  // 对响应错误做点什么
  Notify(error)
  return Promise.reject(error)
})

export default instance
