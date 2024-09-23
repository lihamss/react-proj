/*
 * @Author: leohams
 * @Date: 2024-09-18 14:56:35
 * @LastEditors: fang
 * @LastEditTime: 2024-09-23 20:01:59
 * @FilePath: \react-proj\react-diary\src\store\modules\user\index.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { createSlice } from "@reduxjs/toolkit";
import { getProfileAPI, loginAPI } from "@/apis/user";
import { getToken, setToken } from "@/utils/token";

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    reducers: {
        setUserToken(state, action) {
            state.token = action.payload
            setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        clearUserInfo(state) {
            state.userInfo = {};
        }
    }
})

const { setUserInfo, clearUserInfo, setUserToken } = userStore.actions;

const userReducer = userStore.reducer;


// 异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await loginAPI(loginForm)
        console.log(res)
        dispatch(setUserToken(res.data))
    }
}

// const fetchUserInfo = () => {
//     return async (dispatch) => {
//         const res = await getProfileAPI()
//         dispatch(setUserInfo(res.data))
//     }
// }

export { fetchLogin }
export default userReducer