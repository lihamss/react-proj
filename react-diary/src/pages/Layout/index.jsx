/*
 * @Author: leohams
 * @Date: 2024-09-10 14:49:29
 * @LastEditors: fang
 * @LastEditTime: 2024-09-26 14:44:05
 * @FilePath: \react-proj\react-diary\src\pages\Layout\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import React, { useEffect } from 'react';
import * as Icons from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Popconfirm, Avatar } from 'antd';
import './index.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LogoutOutlined,
} from '@ant-design/icons'
import '../../assets/user.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo, clearUserInfo } from '@/store/modules/user';
import { fetchCategoryList1 } from '@/store/modules/categroy';
import { UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import AddContent from '../AddContent';
import { useState } from 'react';


const { Header, Content, Footer, Sider } = Layout;

const LayoutPage = () => {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contentType, setContentType] = useState(null);
  const username = useSelector(state => state.user.userInfo.username)
  const category1List = useSelector(state => state.category.categoryList1)
  console.log("category1List321", category1List)
  const items1 = category1List.map(item => {
    return { label: item.name, key: item.path }
  })
  console.log(items1)
  const location = useLocation()
  const selectedKey = [location.pathname]
  const navigate = useNavigate()

  const selectCategory = category1List.filter(item=>item.path === selectedKey[0])
  console.log(selectCategory)

  const items2 = selectCategory.length === 0 ? [{}] :selectCategory[0]["children"].map(item => {
    const IconComponent = Icons[item.icon];
    return {
      label: item.name,
      key: item.id,
      icon: IconComponent ? <IconComponent /> : null,
      children: item.children.map(child => {
        const IconComponent2 = Icons[child.icon];
        return {
          label: child.name,
          key: child.path,
          icon: IconComponent2 ? <IconComponent2 /> : null,
        }
      })
    }
  })


  // 获取一级菜单列表
  useEffect(() => {
    dispatch(fetchCategoryList1())
  }, [dispatch])

  // 获取用户信息
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])


  // 菜单点击事件
  const menuClick = (e) => {
    navigate(e.key)
  }

  // 添加点击事件
  const showModal = (type) => {
    setContentType(type);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = (values) => {
    console.log('Modal确认，提交的值:', values);
    setIsModalVisible(false)
    // 这里可以处理提交后的逻辑
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // 登出点击事件
  const logOut = () => {
    dispatch(clearUserInfo())
    navigate('/login')
  }

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
          <span className="user-name">{username}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" placement="bottomRight" okText="退出" cancelText="取消" onConfirm={logOut}>
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
          {/* 侧边菜单 */}
          <Sider className="sider" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['4']}
              defaultOpenKeys={['4']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content className="inner-content">
            <Outlet />
          </Content>
        </Layout>
      </Content>

      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ insetInlineEnd: 24, position: 'fixed', bottom: 94, left: 100, }}
        icon={<PlusOutlined />}
      >
        <FloatButton onClick={() => showModal('article')}/>
        <FloatButton icon={<UnorderedListOutlined />} onClick={() => showModal('directory')}/>
      </FloatButton.Group>

      <AddContent
        type={contentType}
        isModalVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        category1List={category1List}
      />

      {/* 底部 */}
      <Footer className="footer">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutPage;