// 引入axios
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://106.52.239.202/' : 'http://localhost:8080',
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  if (response.status !== 200) {
    console.log(response.statusText)
    return Promise.reject(new Error(response.statusText))
  }
  return response.data
}, (error) => {
  // 对响应错误做点什么
  console.log(error)
  return Promise.reject(error)
})

export default instance
