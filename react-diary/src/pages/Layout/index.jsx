/*
 * @Author: leohams
 * @Date: 2024-09-10 14:49:29
 * @LastEditors: fang
 * @LastEditTime: 2024-09-11 15:15:50
 * @FilePath: \react-proj\react-diary\src\pages\Layout\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Popconfirm, Avatar } from 'antd';
import './index.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LogoutOutlined,
} from '@ant-design/icons'
import '../../assets/user.png'

const { Header, Content, Footer, Sider } = Layout;

// 菜单名称
const items1 = [
  {
    label: '日志',
    key: '/',
  },
  {
    label: '每日见闻',
    key: '/new',
  },
  {
    label: '网站工具',
    key: '/website',
  },
]

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const LayoutPage = () => {
  const location = useLocation()
  const selectedKey = [location.pathname]
  const navigate = useNavigate()
  // 菜单点击事件
  const menuClick = (e) => {
    navigate(e.key)
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="layout-container"
      style={{
        '--header-height': '64px',
        '--footer-height': '70px'
      }}>
      {/* 头部 */}
      <Header className="header">
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={['日志']}
          selectedKeys={selectedKey}
          items={items1}
          className="header-menu"
          onClick={menuClick}
        />
        
        <div className="user-info">
        <Avatar src={<img src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' alt="avatar" />} />
          <span className="user-name">leohams</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined />
            </Popconfirm>
          </span>
        </div>
      </Header>

      {/* 内容 */}
      <Content className="content">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="inner-layout"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider className="sider" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content className="inner-content">
            <Outlet />
          </Content>
        </Layout>
      </Content>

      {/* 底部 */}
      <Footer className="footer">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutPage;