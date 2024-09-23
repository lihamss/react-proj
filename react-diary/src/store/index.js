/*
 * @Author: leohams
 * @Date: 2024-09-18 14:57:39
 * @LastEditors: fang
 * @LastEditTime: 2024-09-23 11:18:20
 * @FilePath: \react-proj\react-diary\src\store\index.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./modules/user";

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store