/*
 * @Author: leohams
 * @Date: 2024-09-10 14:51:18
 * @LastEditors: fang
 * @LastEditTime: 2024-09-27 17:11:09
 * @FilePath: \react-proj\react-diary\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { createBrowserRouter } from 'react-router-dom'
import LayoutPage from '../pages/Layout'
import Login from '../pages/Login'
import DailyReport from '../pages/DailyReport'
import New from '../pages/New'
import Website from '../pages/Website'
import AuthRoute from '../components/AuthRoute'
const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute><LayoutPage /></AuthRoute>,
        children: [
            {
                index: true,
                element: <DailyReport />,
            },
            {
                path: 'new',
                element: <New />
            },
            {
                path: 'website',
                element: <Website />
            },
            {
                path: ':dynamicPath', // 使用动态路由参数
                element: <DailyReport />,
            },
        ]    
    },
    {
        path: '/login',
        element: <Login />
    }
])
export default router