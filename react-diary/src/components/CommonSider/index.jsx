/*
 * @Author: leohams
 * @Date: 2024-09-27 13:39:46
 * @LastEditors: fang
 * @LastEditTime: 2024-09-27 17:13:49
 * @FilePath: \react-proj\react-diary\src\components\CommonSider\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { Breadcrumb, Layout, Menu, theme, Popconfirm, Avatar } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const CommonSider = ({items2, handleClick}) => {
    return (
        <Sider className="sider" width={200}>
            <Menu
              mode="inline"
              // defaultOpenKeys={['defaultOpenKey']}
              // defaultSelectedKeys={[defaultSelectedKey]}
              // openKeys={openKeys}
              // selectedKeys={[selectedMenuKey]}
              // onOpenChange={onOpenChange}
              onClick={handleClick}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
    );
};
export default CommonSider;