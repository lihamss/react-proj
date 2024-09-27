import { Breadcrumb, Layout, Menu, theme, Popconfirm, Avatar } from 'antd';
import {
    LogoutOutlined,
  } from '@ant-design/icons'
const { Header, Content, Footer, Sider } = Layout;

const CommonHeader = ({items1, selectedKey, menuClick, username, logOut}) => {
    return (
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
    )
};

export default CommonHeader;