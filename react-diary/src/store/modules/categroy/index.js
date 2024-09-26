/*
 * @Author: leohams
 * @Date: 2024-09-18 14:56:35
 * @LastEditors: fang
 * @LastEditTime: 2024-09-26 10:42:07
 * @FilePath: \react-proj\react-diary\src\store\modules\categroy\index.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { createSlice } from "@reduxjs/toolkit";
import { getCategoryList1, createCategory } from "@/apis/category";

const categoryStore = createSlice({
    name: 'category',
    initialState: {
        categoryList1: [],
    },
    reducers: {
        setCategoryList1(state, action) {
            state.categoryList1 = action.payload
        },
    }
})

const { setCategoryList1 } = categoryStore.actions;

const categoryReducer = categoryStore.reducer;


// 异步方法封装
const fetchCategoryList1 = () => {
    return async (dispatch) => {
        const res = await getCategoryList1()
        dispatch(setCategoryList1(res.data))
    }
}

export { fetchCategoryList1, setCategoryList1 }
export default categoryReducer