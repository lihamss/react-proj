/*
 * @Author: leohams
 * @Date: 2024-09-10 09:32:09
 * @LastEditors: fang
 * @LastEditTime: 2024-09-11 17:21:48
 * @FilePath: \react-proj\react-diary\src\pages\Login\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import LoginPage, { Username, Password, Submit, Title, Logo, Footer } from '@react-login-page/page5';
import './index.css'
const css = {
    '--login-bg': '#333',
    '--login-color': '#fff',
    '--login-input': '#333',
    '--login-input-bg': '#fff',
    '--login-input-before': 'rgb(62 41 255 / 15%)',
    '--login-input-after': 'rgb(49 141 255 / 20%)',
    '--login-inner-bg': '#ffffffd1',
    '--login-btn': '#fff',
    '--login-btn-bg': '#f45b5b',
    '--login-btn-focus': '#3648c6',
    '--login-btn-hover': '#3648c6',
    '--login-btn-active': '#5b6ef4',
    '--login-footer': '#ffffff99',
    '--login-page4-logo': 'url(https://cdn.jsdelivr.net/gh/leohams/cdn@main/img/logo.png)',
};

const Login = () => (
    <div style={{ height: '100vh' }}>
        <LoginPage style={css}>
            <Username name="userUserName" placeholder="请输入用户名" />
            <Password placeholder="请输入密码" name="userPassword" />
            <Submit>提交</Submit>
            <Submit type="reset" keyname="reset">
                重置
            </Submit>
        <Footer>
            Not a member? <a href="#">Sign up now</a>
        </Footer>
    </LoginPage>
    </div >
);

export default Login;