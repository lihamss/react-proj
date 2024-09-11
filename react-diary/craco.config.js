/*
 * @Author: leohams
 * @Date: 2024-09-03 17:23:02
 * @LastEditors: fang
 * @LastEditTime: 2024-09-03 17:23:10
 * @FilePath: \easy-react\react-jike\src\craco.config.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
const path = require('path')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src')
    }
  }
}