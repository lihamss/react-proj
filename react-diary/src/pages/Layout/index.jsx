/*
 * @Author: leohams
 * @Date: 2024-09-10 14:49:29
 * @LastEditors: fang
 * @LastEditTime: 2024-09-27 17:12:45
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
import '../../assets/user.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo, clearUserInfo } from '@/store/modules/user';
import { fetchCategoryList1 } from '@/store/modules/categroy';
import { UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import AddContent from '../AddContent';
import { useState } from 'react';
import CommonSider from '@/components/CommonSider';
import CommonFooter from '@/components/CommonFooter';
import CommonHeader from '@/components/CommonHeader';

const { Header, Content, Footer } = Layout;

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

  const selectCategory = category1List.filter(item => item.path === selectedKey[0])
  console.log(selectCategory)

  const items2 = selectCategory.length === 0 ? [{}] : selectCategory[0]["children"].map(item => {
    const IconComponent = Icons[item.icon];
    return {
      label: item.name,
      key: item.id,
      icon: IconComponent ? <IconComponent /> : null,
      children: item.children.map(child => {
        const IconComponent2 = Icons[child.icon];
        return {
          label: child.name,
          key: child.id,
          icon: IconComponent2 ? <IconComponent2 /> : null,
        }
      })
    }
  })


  // // 初始化默认打开的子菜单和选中的菜单项
  // const defaultOpenKey = items2[0]?.key || '';
  // const defaultSelectedKey = items2[0]?.children?.[0]?.key || '';
  // // console.log("defOpenn", defaultOpenKey)
  // const [openKeys, setOpenKeys] = useState([defaultOpenKey]);
  // const [selectedMenuKey, setSelectedMenuKey] = useState(defaultSelectedKey);

  const handleClick = (e) => {
    // setSelectedMenuKey(e.key);
    console.log(e.key)
    navigate('/' + e.key)
  };

  // const onOpenChange = (keys) => {
  //   const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
  //   setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  // };


  // useEffect(() => {
  //   // 默认展开第一个子菜单并选中其第一个选项
  //   if (items2.length > 0 && items2[0].children && items2[0].children.length > 0) {
  //     setOpenKeys([items2[0].key]);
  //     setSelectedMenuKey(items2[0].children[0].key);
  //   }
  // }, []);

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
        '--footer-height': '20px'
      }}>
      {/* 头部 */}
      <CommonHeader items1={items1} selectedKey={selectedKey} menuClick={menuClick} username={username} logOut={logOut} />

      {/* 内容 */}
      <Content className="content">
        <Layout
          className="inner-layout"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* 侧边菜单 */}
          <CommonSider items2 = {items2} handleClick={handleClick}/>
          
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
        <FloatButton onClick={() => showModal('article')} />
        <FloatButton icon={<UnorderedListOutlined />} onClick={() => showModal('directory')} />
      </FloatButton.Group>

      <AddContent
        type={contentType}
        isModalVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        category1List={category1List}
      />

      {/* 底部 */}
      <CommonFooter />
    </Layout>
  );
};

export default LayoutPage;