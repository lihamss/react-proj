/*
 * @Author: leohams
 * @Date: 2024-09-04 09:35:35
 * @LastEditors: fang
 * @LastEditTime: 2024-09-23 19:24:24
 * @FilePath: \react-proj\react-diary\src\utils\request.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import axios from 'axios'
import { getToken } from './token'
import { clearToken } from './token'
// import router from '@/router'
const request = axios.create({
  baseURL: 'http://localhost:9001',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  // const token = getToken()
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
  console.log("response", response)
  if (response.data.code === "0") {
    return Promise.reject(response.data.msg)
    // router.navigate('/login')
    // window.location.reload()
  }
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // console.dir(error)
  // if (error.response.status === 401) {
  //   clearToken()
  //   router.navigate('/login')
  //   window.location.reload()
  // }
  return Promise.reject(error)
})

export { request }