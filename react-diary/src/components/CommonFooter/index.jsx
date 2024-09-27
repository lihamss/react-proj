import { Breadcrumb, Layout, Menu, theme, Popconfirm, Avatar } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const CommonFooter = () => {
    return (
        <Footer className="footer">
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    )
}
export default CommonFooter