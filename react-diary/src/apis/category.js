/*
 * @Author: leohams
 * @Date: 2024-09-25 09:42:45
 * @LastEditors: fang
 * @LastEditTime: 2024-09-26 10:29:48
 * @FilePath: \react-proj\react-diary\src\apis\category.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 用户相关的所有请求
import { request } from "@/utils/request"
// 1. 获取菜单列表

// 1.1 获取一级菜单列表
export function getCategoryList1 () {
  return request({
    url: '/category/list_l1',
    method: 'GET'
  })
}

// 2. 创建目录
export function createCategory (formData) {
  return request({
    url: '/category/createCategory',
    method: 'POST',
    data: formData
  })
}
