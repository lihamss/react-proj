/*
 * @Author: leohams
 * @Date: 2024-09-09 16:53:29
 * @LastEditors: fang
 * @LastEditTime: 2024-09-10 15:16:41
 * @FilePath: \react-proj\react-diary\src\index.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

